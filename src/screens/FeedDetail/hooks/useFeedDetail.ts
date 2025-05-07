import { fetchFeedDetailAPI } from "@/apis/feedApi";
import { FeedDetail } from "@/models/domain/Feed/FeedDetail";
import { getFeedDetailDtoToDomain } from "@/models/mapper/Feed";
import { useEffect, useState } from "react";

export const useFeedDetail = (id: number) => {
    const [feed, setFeed] = useState<FeedDetail | null>(null);

    useEffect(() => {
        fetchFeedDetailAPI(id)
            .then((res) => {
                setFeed(getFeedDetailDtoToDomain(res));
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return {
        feed,
    };
};
