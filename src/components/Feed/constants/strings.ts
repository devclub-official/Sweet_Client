export const Strings = {
    LIKE_COUNT: (nickname: string, likeCount: number) => `${nickname} 님 외 ${likeCount}명이 좋아합니다.`,
    VIEW_ALL_COMMENTS: "댓글 모두 보기",
    COMMENT_PLACEHOLDER: (nickname: string) => `${nickname}님께 댓글 추가`,
    COMMENT: "댓글",
    REPLY: "답글달기",
} as const;