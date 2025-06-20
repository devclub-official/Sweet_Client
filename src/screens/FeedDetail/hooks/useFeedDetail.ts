import { SweetError } from "@/apis/error";
import { deleteFeedLike, fetchFeedDetailAPI, postFeedLike } from "@/apis/feedApi";
import { postFollows } from "@/apis/followApi";
import { FeedDetail } from "@/models/domain/Feed/FeedDetail";
import { FollowStatus } from "@/models/domain/Feed/FollowStatus";
import { getFeedDetailDtoToDomain } from "@/models/mapper/Feed";
import { useUserStore } from "@/stores/useAuthStore";
import { useEffect, useState } from "react";

export const useFeedDetail = (id: number) => {
    const [feed, setFeed] = useState<FeedDetail | null>(null);
    const user = useUserStore(state => state.user);

    useEffect(() => {
        if (user) {
            fetchFeedDetailAPI(id, user.id)
                .then((res) => {
                    setFeed(getFeedDetailDtoToDomain(res));
                })
                .catch((err) => {
                    console.log(err);
                }); 
        }
    }, [id]);

    const likeFeed = () => {
        if (user) {
            postFeedLike(id, user.id)
                .then(() => {
                    if (feed) {
                        setFeed((prev) => {
                            if (!prev) {
                                return prev;
                            }

                            return {
                                ...prev,
                                isLiked: !prev.isLiked,
                                likeCount: prev.likeCount + 1,
                            };
                        });
                    }
                })
                .catch((err) => {
                    if (err instanceof SweetError) {
                        console.log(err.errorMessage);
                    }
                });
        } else {
            //TODO: 나중에 지워질 예정
            postFeedLike(id, 1)
                .then(() => {
                    if (feed) {
                        setFeed((prev) => {
                            if (!prev) {
                                return prev;
                            }

                            return {
                                ...prev,
                                isLiked: !prev.isLiked,
                                likeCount: prev.likeCount + 1,
                            };
                        });
                    }
                })
                .catch((err) => {
                    if (err instanceof SweetError) {
                        console.log(err.errorMessage);
                    }
                });
        }
    };

    const unlikeFeed = () => {
        if (user) {
            deleteFeedLike(id, user.id)
                .then(() => {
                    if (feed) {
                        setFeed((prev) => {
                            if (!prev) {
                                return prev;
                            }

                            return {
                                ...prev,
                                isLiked: !prev.isLiked,
                                likeCount: prev.likeCount - 1,
                            };
                        });
                    }
                })
                .catch((err) => {
                    if (err instanceof SweetError) {
                        console.log(err.errorMessage);
                    }
                });
        } else {
            //TODO: 나중에 지워질 예정
            deleteFeedLike(id, 1)
                .then(() => {
                    if (feed) {
                        setFeed((prev) => {
                            if (!prev) {
                                return prev;
                            }

                            return {
                                ...prev,
                                isLiked: !prev.isLiked,
                                likeCount: prev.likeCount - 1,
                            };
                        });
                    }
                })
                .catch((err) => {
                    if (err instanceof SweetError) {
                        console.log(err.errorMessage);
                    }
                });
        }
    };

    const followUser = (userId: number) => {
        if (user) {
            postFollows(user.id, userId)
                .then(() => {
                    if (feed) {
                        setFeed((prev) => {
                            if (!prev) {
                                return prev;
                            }

                            return {
                                ...prev,
                                followStatus: FollowStatus.FOLLOWING,
                            };
                        });
                    }
                })
                .catch((err) => {
                    if (err instanceof SweetError) {
                        console.log(err.errorMessage);
                    }
                });
        } else {
            //TODO: 나중에 지워질 예정
            postFollows(1, 2)
                .then(() => {
                    if (feed) {
                        setFeed((prev) => {
                            if (!prev) {
                                return prev;
                            }

                            return {
                                ...prev,
                                followStatus: FollowStatus.FOLLOWING,
                            };
                        });
                    }
                })
                .catch((err) => {
                    if (err instanceof SweetError) {
                        console.log(err.errorMessage);
                    }
                });
        }
    };

    return {
        feed,
        likeFeed,
        unlikeFeed,
        followUser,
    };
};
