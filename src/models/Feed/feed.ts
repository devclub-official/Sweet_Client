import { FollowStatus } from "./common";

export interface Feed {
    id: string;
    profileImage: string;
    author: string;
    date: string;
    followStatus: FollowStatus;
    imageList: string[];
    likeCnt: number;
    commentCnt: number;
    content: string;
}
