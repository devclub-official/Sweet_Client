import { Image, StyleSheet, View, ViewStyle } from "react-native";
import { Typo } from "../Typo";
import { Strings } from "./constants/strings";
import { colors } from "@/theme/colors";

interface FeedLikeProps {
    style?: ViewStyle;
    mainCommenterProfileImage: string;
    mainCommenter: string;
    likeCount: number;
}

export const FeedLike = (props: Readonly<FeedLikeProps>) => {
    return (
        <View style={[feedLikeStyles.rootView, props.style]}>
            <Image
                style={feedLikeStyles.profileImage}
                source={{
                    uri: props.mainCommenterProfileImage,
                }}
            />
            <Typo style={feedLikeStyles.likeTypo}>{Strings.LIKE_COUNT(props.mainCommenter, props.likeCount - 1)}</Typo>
        </View>
    );
};

const feedLikeStyles = StyleSheet.create({
    rootView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7,
        marginBottom: 8,
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