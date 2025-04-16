export enum FollowStatus {
    FOLLOWING,
    NOT_FOLLOWING,
};

export interface Feed {
    id: string;
    profileImage: string;
    author: string;
    date: string;
    followStatus: FollowStatus;
    imageList: string[];
    likeCnt: number;
    commentCnt: number;
    mainCommenterProfileImage: string;
    mainCommenter: string;
    content: string;
    comments: Comment[];
    exercises: Exercise[];
}

export interface Comment {
    id: string;
    profileImage: string;
    commenter: string;
    content: string;
}

export interface Exercise {
    id: string;
    exerciseName: string;
    exerciseInfo: string; 
}