import { FollowStatus } from "./FollowStatus";

export interface Like {
    id: string;
    profileImage: string;
    nickname: string;
    followStatus: FollowStatus;
}
