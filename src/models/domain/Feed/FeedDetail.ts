import { FollowStatus } from "./FollowStatus";

export interface FeedDetail {
    id: number;
    authorId: number;
    authorProfileImage: string;
    authorName: string;
    title: string;
    content: string;
    imageUrls: string[];
    followStatus: FollowStatus;
    likeCount: number;
    commentCount: number;
    isLiked: boolean;
    firstLikedUserName: string;
    comments: CommentSummary[];
    date: string;
}

export interface CommentSummary {
    commentId: string;
    commenterId: number;
    commenter: string;
    comment: string;
}
