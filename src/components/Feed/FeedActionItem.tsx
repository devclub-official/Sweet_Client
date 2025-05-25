//피드 컴포넌트 중 좋아요/댓글/공유하기 버튼 영역입니다.

import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Typo } from "../Typo";
import { Svg } from "../Svg";
import { SvgNames } from "@/types/svg";

interface FeedActionItemProps {
    svgName: SvgNames;
    count?: number;
    onPressIcon: () => void;
    onPressText?: () => void;
}

export const FeedActionItem = ({ svgName, count, onPressIcon, onPressText }: FeedActionItemProps) => (
    <View style={styles.rootContainer}>
        <TouchableOpacity onPress={onPressIcon}>
            <Svg svgName={svgName} />
        </TouchableOpacity>
        <Typo font="CaptionR" onPress={onPressText}>{count}</Typo>
    </View>
);

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
});
