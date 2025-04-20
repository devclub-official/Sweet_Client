export const Strings = {
    LIKE: '좋아요',
    FOLLOWING: '팔로잉',
    FOLLOW: '팔로우',
    COMMENT: '댓글',
    REPLY: '답글달기',
    UNFOLLOW: '팔로우 취소',
    ACCOUNT_PROFILE: '계정 프로필',
    HIDE_POST: '해당 게시물 숨기기',
    REPORT: '신고',
    TAGGED_EXERCISES: '해당 이미지에 태그 된 운동',
    COMMENT_PLACEHOLDER: (nickname: string) => `${nickname}님께 댓글 추가`,
    LIKE_COUNT: (nickname: string, likeCount: number) => `${nickname} 님 외 ${likeCount}명이 좋아합니다.`,
} as const;
