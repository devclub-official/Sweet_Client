import { PatchUserDto, PatchUserResponseDto } from "@/models/dto/User/PatchUserDto";
import { SweetResponse } from "@/types/network";
import { api } from "./common";
import Config from "react-native-config";
import { Asset } from "react-native-image-picker";
import { UserInfo } from "@/types/user";

export const patchUserAPI = (profileImage: Asset | undefined, userInfo: PatchUserDto): Promise<SweetResponse<PatchUserResponseDto>> => {
    const user = Object.fromEntries(
        Object.entries(userInfo).filter(([_, value]) => value != null)
    );
    const formData = new FormData();

    if (profileImage) {
        formData.append('profileImage', {
            url: profileImage.uri,
            name: profileImage.fileName,
            type: profileImage.type,
        });
    }
    formData.append('userInfo', JSON.stringify(user));

    return api.patch<SweetResponse<PatchUserResponseDto>>({
        url: `${Config.MAIN_API_ORIGIN}/api/users`,
        body: formData,
        isMultipart: true,
    });
}

export const fetchMyProfileAPI = (): Promise<SweetResponse<UserInfo>> =>
    api.get<SweetResponse<UserInfo>>({
        url: `${Config.AUTH_API_ORIGIN}/api/users`,
    });