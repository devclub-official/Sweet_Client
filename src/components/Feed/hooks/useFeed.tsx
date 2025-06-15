import { SweetError } from "@/apis/error";
import { fetchFeedCommentListAPI, fetchFeedLkeListAPI, postFeedCommentAPI } from "@/apis/feedApi";
import { fetchFollowStatus } from "@/apis/followApi";
import { Comment } from "@/models/domain/Feed/Comment";
import { FollowStatus } from "@/models/domain/Feed/FollowStatus";
import { Like } from "@/models/domain/Feed/Like";
import { postCommentResponseDtoToDomain, likeDtoToDomain, commentDtoToDomain } from "@/models/mapper/Feed";
import { fetFollowStatusDtoToFollowStatus } from "@/models/mapper/Follow";
import { useUserStore } from "@/stores/useAuthStore";
import { useCallback, useState } from "react";

export const useFeed = () => {
    const [isLast, setIsLast] = useState<boolean>(false);
    const [comments, setComments] = useState<Comment[]>([]);
    const [likes, setLikes] = useState<Like[]>([]);
    const user = useUserStore(state => state.user);

    const getCommentList = useCallback((feedId: string, page: number) => {
        fetchFeedCommentListAPI(page, Number(feedId))
            .then((res) => {
                setIsLast(res.last);

                setComments((prev) => {
                    if (page === 0) {
                        return res.content.map(commentDtoToDomain);
                    } else {
                        return [
                            ...prev,
                            ...res.content.map(postCommentResponseDtoToDomain),
                        ];
                    }
                });
            })
            .catch((err) => {
                if (err instanceof SweetError) {
                    console.log(err.errorMessage);
                }
            });
    }, []);

    const getLikeList = useCallback(async (feedId: string) => {
        try {
            const res = await fetchFeedLkeListAPI(Number(feedId));

            const likePromises = res.map(async (like) => {
                try {
                    const followStatusRes = await fetchFollowStatus(user?.id ?? 1, like.userId);
                    return {
                        ...likeDtoToDomain(like),
                        followStatus: fetFollowStatusDtoToFollowStatus(followStatusRes),
                    };
                } catch (err) {
                    if (err instanceof SweetError) {
                        console.log(err.errorMessage);
                    }
                    return {
                        ...likeDtoToDomain(like),
                        followStatus: FollowStatus.UNFOLLOWED,
                    };
                }
            });

            const likesWithFollowStatus = await Promise.all(likePromises);
            setLikes(likesWithFollowStatus);
        } catch (err) {
            if (err instanceof SweetError) {
                console.log(err.errorMessage);
            }
        }
    }, [user]);

    const postComment = useCallback((feedId: string, comment: string) => {
        if (user) {
            postFeedCommentAPI(Number(feedId), comment, user.id)
                .then((res) => {
                    setComments((prev) => [
                        postCommentResponseDtoToDomain(res),
                        ...prev,
                    ]);
                })
                .catch((err) => {
                    if (err instanceof SweetError) {
                        console.log(err.errorMessage);
                    }
                });
        } else {    //TODO: 나중에 지워져야 함.
            postFeedCommentAPI(Number(feedId), comment, 1)
                .then((res) => {
                    setComments((prev) => [
                        postCommentResponseDtoToDomain(res),
                        ...prev,
                    ]);
                })
                .catch((err) => {
                    if (err instanceof SweetError) {
                        console.log(err.errorMessage);
                    }
                });
        }
    }, [user]);

    return {
        comments,
        likes,
        isLast,
        setComments,
        getCommentList,
        getLikeList,
        postComment,
    };
};
