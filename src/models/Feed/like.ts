import { FollowStatus } from "./common";

export interface Like {
    id: string;
    profileImage: string;
    nickname: string;
    followStatus: FollowStatus;
}
