import Config from "react-native-config";
import { api } from "./common";
import { GetFollowStatusDto } from "@/models/dto/Follow/GetFollowStatusDto";

export const postFollows = (followerId: number, targetUserId: number): Promise<void> => api.post<void>({
    url: `${Config.MAIN_API_ORIGIN}/api/follows?followerId=${followerId}&targetUserId=${targetUserId}`,
});

export const deleteFollows = (followerId: number, targetUserId: number): Promise<void> => api.delete<void>({
    url: `${Config.MAIN_API_ORIGIN}/api/follows?followerId=${followerId}&targetUserId=${targetUserId}`,
});

export const fetchFollowStatus = (followerId: number, targetUserId: number): Promise<GetFollowStatusDto> => api.get<GetFollowStatusDto>({
    url: `${Config.MAIN_API_ORIGIN}/api/follows/status?followerId=${followerId}&targetUserId=${targetUserId}`,
});
