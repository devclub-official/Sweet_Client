import { useCallback, useEffect, useState } from "react"
import { ProfileInfo } from "@/models/domain/Profile/ProfileInfo";
import { fetchUserProfileAPI } from "@/apis/profile";
import { getUserProfileDtoToDomain, userInfoToDomain } from "@/models/mapper/Profile";
import { SweetError } from "@/apis/error";
import { fetchMyProfileAPI } from "@/apis/user";
import { useIsFocused } from "@react-navigation/native";

export const useProfile = (userId?: number, isMyPage: boolean) => {
    const isFocused = useIsFocused();
    const [profileInfo, setProfileInfo] = useState<ProfileInfo>({
        id: "-1",
        type: "SELF",
        nickname: "",
        profileImage: "",
        introduce: "",
        feedCount: "0",
        followerCount: "0",
        followingCount: "0",
        isOnWorkoutStreak: true,
        workoutStatusMessage: "",
        favoriteWorkout: "",
        feeds: [],
    });

    const getMyProfileInfo = useCallback(() => {
        fetchMyProfileAPI()
            .then(res => {
                setProfileInfo(userInfoToDomain(res.data));
            })
            .catch(err => {
                if (err instanceof SweetError) {
                    console.log(err.errorMessage);
                }
            });
    }, []);

    const getUserProfileInfo = useCallback(() => {
        if (userId) {
            fetchUserProfileAPI(userId)
                .then(res => {
                    setProfileInfo(getUserProfileDtoToDomain(res));
                })
                .catch(err => {
                    if (err instanceof SweetError) {
                        console.log(err.errorMessage);
                    }
                });
        }
    }, [userId]);

    useEffect(() => {
        if (isFocused) {
            if (isMyPage) {
                getMyProfileInfo();
            } else {
                getUserProfileInfo();
            }
        }
    }, [isFocused, isMyPage]);

    return {
        profileInfo,
    };
};
