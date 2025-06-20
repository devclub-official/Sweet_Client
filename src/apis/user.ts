import { PatchUserDto, PatchUserResponseDto } from "@/models/dto/User/PatchUserDto";
import { SweetResponse } from "@/types/network";
import { api } from "./common";
import Config from "react-native-config";
import { Asset } from "react-native-image-picker";
import { UserInfo } from "@/types/user";
import { GetUserDto } from "@/models/dto/User/GetUserDto";

export const patchUserAPI = (profileImage: Asset | undefined, userInfo: PatchUserDto): Promise<SweetResponse<PatchUserResponseDto>> => {
    const user = Object.fromEntries(
        Object.entries(userInfo).filter(([_, value]) => value != null)
    );
    const formData = new FormData();

    if (profileImage) {
        formData.append('profileImage', {
            uri: profileImage.uri,
            name: profileImage.fileName,
            type: profileImage.type,
        });
    }
    formData.append('userInfo', JSON.stringify(user));

    return api.patch<SweetResponse<PatchUserResponseDto>>({
        url: `${Config.AUTH_API_ORIGIN}/api/users`,
        body: formData,
        isMultipart: true,
    });
}

export const fetchMyProfileAPI = (): Promise<SweetResponse<GetUserDto>> =>
    api.get<SweetResponse<GetUserDto>>({
        url: `${Config.AUTH_API_ORIGIN}/api/users`,
    });