import { StyleSheet, View, ViewStyle } from "react-native";
import { Typo } from "../Typo";
import { colors } from "@/theme/colors";

interface FeedContentProps {
    style?: ViewStyle;
    nickname: string;
    content: string;
}

export const FeedContent = (props: FeedContentProps) => {
    return (
        <View style={props.style}>
            <Typo style={feedContentStyles.contentTypo}>
                <Typo style={feedContentStyles.nicknameTypo}>{props.nickname}</Typo>
                {`  ${props.content}`}
            </Typo>
        </View>
    );
};

const feedContentStyles = StyleSheet.create({
    nicknameTypo: {
        color: colors.CG1,
    },
    contentTypo: {
        flex: 1,
        color: colors.CG1,
    },
});