export const Strings = {
    LIKE_COUNT: (nickname: string, likeCount: number) => `${nickname} 님 외 ${likeCount}명이 좋아합니다.`,
    VIEW_ALL_COMMENTS: "댓글 모두 보기",
} as const;