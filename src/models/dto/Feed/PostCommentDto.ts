export interface PostCommentRequestDto {
    text: string;
}

export interface PostCommentResponseDto {
    commentId: number;
    userId: number;
    userName: string;
    profileImageUrl: string;
    text: string;
    createdAt: string;
}
