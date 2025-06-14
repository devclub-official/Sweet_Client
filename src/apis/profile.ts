import { GetMyProfileDto } from "@/models/dto/Profile/GetMyProfileDto";
import Config from "react-native-config";
import { api } from "./common";

export const fetchMyProfileAPI = (): Promise<GetMyProfileDto> =>
  api.get<GetMyProfileDto>({
    url: `${Config.MAIN_API_ORIGIN}/api/profiles/me`,
  });