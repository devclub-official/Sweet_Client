import Config from "react-native-config";
import { ProfileInfo } from "../domain/Profile/ProfileInfo";
import { GetUserProfileDto } from "../dto/Profile/GetUserProfileDto";
import { UserInfo } from "@/types/user";

// export const getMyProfileDtoToDomain = (dto: GetMyProfileDto): ProfileInfo => ({
//     id: dto.id.toString(),
//     type: "SELF",
//     nickname: dto.username,
//     profileImage: `${Config.MAIN_API_ORIGIN}${dto.profileImage}`,
//     introduce: dto.bio,
//     feedCount: dto.postsCount.toLocaleString(),
//     followerCount: dto.followersCount.toLocaleString(),
//     followingCount: dto.followingCount.toLocaleString(),
//     isOnWorkoutStreak: true,
//     workoutStatusMessage: "연속 5일 운동 기록 중",
//     favoriteWorkout: "나의 최애 운동은 ? [필라테스]",
//     feeds: [
//         {
//             feedId: 1,
//             feedThumbnail:
//                 'https://images.unsplash.com/photo-1591258370814-01609b341790?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         },
//         {
//             feedId: 2,
//             feedThumbnail:
//             'https://images.unsplash.com/photo-1641913640860-ab4c2bfb2bb0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         },
//         {
//             feedId: 3,
//             feedThumbnail:
//             'https://images.unsplash.com/photo-1717500252573-d31d4bf5ddf1?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         },
//         {
//             feedId: 4,
//             feedThumbnail:
//             'https://images.unsplash.com/photo-1717500250573-a76fce75ffb3?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         },
//         {
//             feedId: 5,
//             feedThumbnail:
//             'https://images.unsplash.com/photo-1717500252179-2811af29e4f7?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         },
//     ],
// });

export const userInfoToDomain = (dto: UserInfo): ProfileInfo => ({
    id: dto.id.toString(),
    type: "SELF",
    nickname: dto.username,
    profileImage: `${Config.MAIN_API_ORIGIN}${dto.profileImage}`,
    introduce: dto.bio,
    feedCount: '1,000',
    followerCount: '1,000',
    followingCount: '1,000',
    isOnWorkoutStreak: true,
    workoutStatusMessage: "연속 5일 운동 기록 중",
    favoriteWorkout: "나의 최애 운동은 ? [필라테스]",
    feeds: [
        {
            feedId: 1,
            feedThumbnail:
                'https://images.unsplash.com/photo-1591258370814-01609b341790?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            feedId: 2,
            feedThumbnail:
            'https://images.unsplash.com/photo-1641913640860-ab4c2bfb2bb0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            feedId: 3,
            feedThumbnail:
            'https://images.unsplash.com/photo-1717500252573-d31d4bf5ddf1?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            feedId: 4,
            feedThumbnail:
            'https://images.unsplash.com/photo-1717500250573-a76fce75ffb3?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            feedId: 5,
            feedThumbnail:
            'https://images.unsplash.com/photo-1717500252179-2811af29e4f7?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ],
});

export const getUserProfileDtoToDomain = (dto: GetUserProfileDto): ProfileInfo => ({
    id: dto.id.toString(),
    type: dto.isFollowing ? "FOLLOWING" : "NOT_FOLLOWING",
    nickname: dto.username,
    profileImage: `${Config.MAIN_API_ORIGIN}${dto.profileImage}`,
    introduce: dto.bio,
    feedCount: dto.postsCount.toLocaleString(),
    followerCount: dto.followersCount.toLocaleString(),
    followingCount: dto.followingCount.toLocaleString(),
    isOnWorkoutStreak: true,
    workoutStatusMessage: "연속 5일 운동 기록 중",
    favoriteWorkout: "나의 최애 운동은 ? [필라테스]",
    feeds: [
        {
            feedId: 1,
            feedThumbnail:
                'https://images.unsplash.com/photo-1591258370814-01609b341790?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            feedId: 2,
            feedThumbnail:
            'https://images.unsplash.com/photo-1641913640860-ab4c2bfb2bb0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            feedId: 3,
            feedThumbnail:
            'https://images.unsplash.com/photo-1717500252573-d31d4bf5ddf1?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            feedId: 4,
            feedThumbnail:
            'https://images.unsplash.com/photo-1717500250573-a76fce75ffb3?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            feedId: 5,
            feedThumbnail:
            'https://images.unsplash.com/photo-1717500252179-2811af29e4f7?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ],
});