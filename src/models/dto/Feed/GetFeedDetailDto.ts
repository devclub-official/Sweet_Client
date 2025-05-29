export interface GetFeedDetailDto {
    id: number;
    title: string;
    authorId: number;
    authorName: string;
    feedContent: string;
    authorProfileImageUrl: string;
    imageUrls: string[];
    visibility: '비공개' | '일촌' | '공개';
    likeCount: number;
    isLikedByCurrentUser: boolean;
    firstLikedUserName: string;
    firstLikedUserProfileImageUrl: string;
    commentCount: number;
    topComments: CommentDto[];
    shareCount: number;
    createdAt: string;
    updatedAt: string;
}

export interface CommentDto {
    commentId: number;
    userId: number;
    userName: string;
    text: string;
    createdAt: string;
}
