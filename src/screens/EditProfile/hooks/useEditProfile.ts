import { EditProfile } from "@/models/domain/Profile/EditProfile";
import { useState } from "react";

export const useEditProfile = () => {
    const [profile, setProfile] = useState<EditProfile | null>({
        nickname: 'testNickname',
        profileImage: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        introduce: '반가워요 :)',
    });

    const [newNickname, setNewNickname] = useState<string>(profile?.nickname ?? '');
    const [newIntroduce, setNewIntroduce] = useState<string>(profile?.introduce ?? '');

    return {
        profile,
        newNickname,
        newIntroduce,
        setNewNickname,
        setNewIntroduce,
    };
};
