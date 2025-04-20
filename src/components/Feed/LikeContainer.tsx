//피드 컴포넌트 중 "~님 외 ~명이 좋아합니다." 영역입니다.

import { Image, StyleSheet, View, ViewStyle } from "react-native";
import { Typo } from "../Typo";
import { Strings } from "./constants/strings";
import { colors } from "@/theme/colors";

interface LikeContainerProps {
    style?: ViewStyle;
    profileImage: string;
    nickname: string;
    likeCount: number;
}

export const LikeContainer = ({ style, profileImage, nickname, likeCount }: LikeContainerProps) => {
    return (
        <View style={[feedLikeStyles.rootContainer, style]}>
            <Image
                style={feedLikeStyles.profileImage}
                source={{
                    uri: profileImage,
                }}
            />
            <Typo style={feedLikeStyles.likeTypo}>{Strings.LIKE_COUNT(nickname, likeCount - 1)}</Typo>
        </View>
    );
};

const feedLikeStyles = StyleSheet.create({
    rootContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7,
    },
    profileImage: {
        width: 17,
        height: 17,
        borderRadius: 8.5,
    },
    likeTypo: {
        color: colors.CG1,
    },
});
