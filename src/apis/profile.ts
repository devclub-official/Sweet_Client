import { GetMyProfileDto } from "@/models/dto/Profile/GetMyProfileDto";
import Config from "react-native-config";
import { api } from "./common";
import { GetUserProfileDto } from "@/models/dto/Profile/GetUserProfileDto";

// export const fetchMyProfileAPI = (): Promise<GetMyProfileDto> =>
//   api.get<GetMyProfileDto>({
//     url: `${Config.MAIN_API_ORIGIN}/api/profiles/me`,
//   });

export const fetchUserProfileAPI = (userId: number): Promise<GetUserProfileDto> =>
  api.get<GetUserProfileDto>({
    url: `${Config.MAIN_API_ORIGIN}/api/profiles/${userId}`,
  });