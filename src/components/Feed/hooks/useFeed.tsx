import { SweetError } from "@/apis/error";
import { fetchFeedCommentListAPI, fetchFeedLkeListAPI } from "@/apis/feedApi";
import { Comment } from "@/models/domain/Feed/Comment";
import { Like } from "@/models/domain/Feed/Like";
import { commentDtoToDomain, likeDtoToDomain } from "@/models/mapper/Feed";
import { useCallback, useState } from "react";

export const useFeed = () => {
    const [currentFeedId, setCurrentFeedId] = useState<string>('');
    const [page, setPage] = useState<number>(0);
    const [isLast, setIsLast] = useState<boolean>(false);
    const [comments, setComments] = useState<Comment[]>([]);
    const [likes, setLikes] = useState<Like[]>([]);

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
                        return res.content.map(commentDtoToDomain);
                    } else {
                        return [
                            ...prev,
                            ...res.content.map(commentDtoToDomain),
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

    return {
        comments,
        likes,
        getCommentList,
        getLikeList,
    };
};
