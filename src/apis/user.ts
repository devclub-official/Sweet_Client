import { PatchUserDto, PatchUserResponseDto } from "@/models/dto/User/PatchUserDto";
import { SweetResponse } from "@/types/network";
import { api } from "./common";
import Config from "react-native-config";

export const patchUserAPI = (userInfo: PatchUserDto): Promise<SweetResponse<PatchUserResponseDto>> => {
    const user = Object.fromEntries(
        Object.entries(userInfo).filter(([_, value]) => value != null)
    );
    const formData = new FormData();
    formData.append('userInfo', JSON.stringify(user));

    return api.patch<SweetResponse<PatchUserResponseDto>>({
        url: `${Config.AUTH_API_ORIGIN}/api/users`,
        body: formData,
        isMultipart: true,
    });
}