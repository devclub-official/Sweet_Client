// 피드 컴포넌트 중 글과 댓글 영역입니다.

import { StyleSheet, View, ViewStyle } from "react-native";
import { Typo } from "../Typo";
import { colors } from "@/theme/colors";

interface ContentItemProps {
    style?: ViewStyle;
    nickname: string;
    content: string;
}

export const ContentItem = ({ style, nickname, content }: ContentItemProps) => {
    return (
        <View style={[styles.rootContainer, style]}>
            <Typo style={styles.contentTypo}>
                <Typo style={styles.nicknameTypo}>{nickname}</Typo>
                {`  ${content}`}
            </Typo>
        </View>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nicknameTypo: {
        color: colors.CG1,
    },
    contentTypo: {
        flex: 1,
        color: colors.CG1,
    },
});
