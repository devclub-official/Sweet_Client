import Config from "react-native-config";
import { api } from "./common";

export const postFollows = (followerId: number, targetUserId: number): Promise<void> => api.post<void>({
    url: `${Config.MAIN_API_ORIGIN}/api/follows?followerId=${followerId}&targetUserId=${targetUserId}`,
});

export const deleteFollows = (followerId: number, targetUserId: number): Promise<void> => api.delete<void>({
    url: `${Config.MAIN_API_ORIGIN}/api/follows?followerId=${followerId}&targetUserId=${targetUserId}`,
});
