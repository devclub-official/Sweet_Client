export interface GetUserProfileDto {
    isFollowing: boolean;
    postsCount: number;
    bio: string;
    id: number;
    profileImage: string;
    followersCount: number;
    followingCount: number;
    username: string;
}