import { FollowStatus } from "./FollowStatus";

export interface FeedSummary {
    id: string;
    title: string;
    authorId: number;
    authorName: string;
    profileImage: string;
    feedContent: string;
    imageUrls: string[];
    date: string;
    isLiked: boolean;
    likeCnt: number;
    commentCnt: number;
    likeUserName: string;
    likeUserProfileImage: string;
    followStatus: FollowStatus;
}
