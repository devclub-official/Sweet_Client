// 피드 컴포넌트 중 글과 댓글 영역입니다.

import { StyleSheet, View, ViewStyle } from "react-native";
import { Typo } from "../Typo";

interface ContentItemProps {
    style?: ViewStyle;
    nickname: string;
    content: string;
}

export const ContentItem = ({ style, nickname, content }: ContentItemProps) => {
    return (
        <View style={[styles.rootContainer, style]}>
            <Typo color="CG1" font="BodySmallR" style={styles.contentTypo}>
                <Typo color="CG1">{nickname}</Typo>
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
    contentTypo: {
        flex: 1,
    },
});
