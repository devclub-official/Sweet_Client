import { FeedInProfile } from "./FeedInProfile";
import { ProfileType } from "./ProfileType";

export interface ProfileInfo {
    id: string;
    type: ProfileType;
    nickname: string;
    profileImage: string;
    introduce: string;
    feedCount: string;
    followerCount: string;
    followingCount: string;
    isOnWorkoutStreak: boolean;
    workoutStatusMessage: string;
    favoriteWorkout: string;
    feeds: FeedInProfile[];
}
