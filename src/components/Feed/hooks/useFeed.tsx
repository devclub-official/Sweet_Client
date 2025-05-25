import { SweetError } from "@/apis/error";
import { fetchFeedCommentListAPI, fetchFeedLkeListAPI, postFeedCommentAPI } from "@/apis/feedApi";
import { Comment } from "@/models/domain/Feed/Comment";
import { Like } from "@/models/domain/Feed/Like";
import { postCommentResponseDtoToDomain, likeDtoToDomain } from "@/models/mapper/Feed";
import { useUserStore } from "@/stores/useAuthStore";
import { useCallback, useState } from "react";

export const useFeed = () => {
    const [currentFeedId, setCurrentFeedId] = useState<string>('');
    const [page, setPage] = useState<number>(0);
    const [isLast, setIsLast] = useState<boolean>(false);
    const [comments, setComments] = useState<Comment[]>([]);
    const [likes, setLikes] = useState<Like[]>([]);
    const user = useUserStore(state => state.user);

    const getCommentList = useCallback((feedId: string) => {
        if (currentFeedId !== feedId) {
            setPage(0);
            setIsLast(false);
            setComments([]);
            setCurrentFeedId(feedId);
        }

        if (isLast) {
            return;
        }

        fetchFeedCommentListAPI(page, Number(feedId))
            .then((res) => {
                setPage(res.number + 1);
                setIsLast(res.last);

                setComments((prev) => {
                    if (res.number === 0) {
                        return res.content.map(postCommentResponseDtoToDomain);
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
    }, [currentFeedId, isLast, page]);
    const getLikeList = useCallback((feedId: string) => {
        fetchFeedLkeListAPI(Number(feedId))
            .then((res) => {
                if (res.length === 0) {
                    setLikes([]);
                } else {
                    setLikes(res.map(likeDtoToDomain));
                }
            })
            .catch((err) => {
                if (err instanceof SweetError) {
                    console.log(err.errorMessage);
                }
            });
    }, []);
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
        getCommentList,
        getLikeList,
        postComment,
    };
};
