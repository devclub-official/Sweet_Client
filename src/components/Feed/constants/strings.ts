export const Strings = {
    LIKE_COUNT: (nickname: string, likeCount: number) => `${nickname} 님 외 ${likeCount}명이 좋아합니다.`,
    VIEW_ALL_COMMENTS: "댓글 모두 보기",
    COMMENT_PLACEHOLDER: (nickname: string) => `${nickname}님께 댓글 추가`,
    COMMENT: "댓글",
    REPLY: "답글달기",
    UNFOLLOW: "팔로우 취소",
    HIDE_POST: "해당 게시물 숨기기",
    REPORT: "신고",
    ACCOUNT_PROFILE: "계정 프로필",
    TAGGED_EXERCISES: "해당 이미지에 태그 된 운동",
} as const;