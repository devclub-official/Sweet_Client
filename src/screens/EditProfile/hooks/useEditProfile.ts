import { SweetError } from "@/apis/error";
import { fetchMyProfileAPI } from "@/apis/profile";
import { patchUserAPI } from "@/apis/user";
import { EditProfile } from "@/models/domain/Profile/EditProfile";
import { useCallback, useEffect, useState } from "react";
import Config from "react-native-config";

export const useEditProfile = () => {
    const [profile, setProfile] = useState<EditProfile>({
        nickname: '',
        profileImage: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        introduce: '',
    });

    const [newNickname, setNewNickname] = useState<string>('');
    const [newIntroduce, setNewIntroduce] = useState<string>('');

    const updateProfile = useCallback(() => {
        patchUserAPI({
            nickname: newNickname,
            bio: newIntroduce,
        }).then(res => {
            setProfile(prev => ({
                ...prev,
                nickname: newNickname,
                introduce: newIntroduce,
            }));
        }).catch(err => {
            if (err instanceof SweetError) {
                console.log(err.errorMessage);
            }
        });
    }, []);

    useEffect(() => {
        fetchMyProfileAPI().then(res => {
            setProfile({
                nickname: res.username,
                profileImage: `${Config.MAIN_API_ORIGIN}${res.profileImage}`,
                introduce: res.bio,
            });
            setNewNickname(res.username);
            setNewIntroduce(res.bio);
        }).catch(err => {
            if (err instanceof SweetError) {
                console.log(err.errorMessage);
            }
        });
    }, [])

    return {
        profile,
        newNickname,
        newIntroduce,
        setNewNickname,
        setNewIntroduce,
        updateProfile,
    };
};
