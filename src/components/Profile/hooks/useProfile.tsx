import { useCallback, useEffect, useState } from "react"
import { ProfileInfo } from "@/models/domain/Profile/ProfileInfo";
import { fetchMyProfileAPI, fetchUserProfileAPI } from "@/apis/profile";
import { getMyProfileDtoToDomain, getUserProfileDtoToDomain } from "@/models/mapper/Profile";
import { SweetError } from "@/apis/error";

export const useProfile = (userId?: number, isMyPage: boolean) => {
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
                setProfileInfo(getMyProfileDtoToDomain(res));
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
        if (isMyPage) {
            getMyProfileInfo();
        } else {
            getUserProfileInfo();
        }
    }, [isMyPage]);

    return {
        profileInfo,
    };
};
