import { SweetError } from "@/apis/error";
import { fetchMyProfileAPI, patchUserAPI } from "@/apis/user";
import { EditProfile } from "@/models/domain/Profile/EditProfile";
import { useCallback, useEffect, useState } from "react";
import Config from "react-native-config";
import { Asset } from "react-native-image-picker";

export const useEditProfile = () => {
    const [profile, setProfile] = useState<EditProfile>({
        nickname: '',
        profileImage: '',
        introduce: '',
    });

    const [newImage, setNewImage] = useState<Asset>();
    const [newNickname, setNewNickname] = useState<string>('');
    const [newIntroduce, setNewIntroduce] = useState<string>('');

    const updateProfile = useCallback(() => {
        patchUserAPI(
            newImage,
            {
                nickname: newNickname,
                bio: newIntroduce,
            }
        ).then(res => {
                setProfile({
                    profileImage: `${Config.MAIN_API_ORIGIN}${res.data.profileImage}`,
                    nickname: newNickname,
                    introduce: newIntroduce,
                });
            }).catch(err => {
                if (err instanceof SweetError) {
                    console.log(err.errorMessage);
                }
            });
    }, [newNickname, newIntroduce]);

    useEffect(() => {
        fetchMyProfileAPI().then(res => {
            setProfile({
                nickname: res.data.username,
                profileImage: `${Config.MAIN_API_ORIGIN}${res.data.profileImage}`,
                introduce: res.data.bio,
            });
            setNewNickname(res.data.username);
            setNewIntroduce(res.data.bio);
        }).catch(err => {
            if (err instanceof SweetError) {
                console.log(err.errorMessage);
            }
        });
    }, []);

    return {
        profile,
        newImage,
        newNickname,
        newIntroduce,
        setNewImage,
        setNewNickname,
        setNewIntroduce,
        updateProfile,
    };
};
