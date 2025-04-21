//피드 컴포넌트 중 좋아요/댓글/공유하기 버튼 영역입니다.

import { StyleSheet, View } from "react-native";
import { Button } from "../Button";
import { Typo } from "../Typo";
import { Svg } from "../Svg";
import { SvgNames } from "@/types/svg";

interface FeedActionItemProps {
    svgName: SvgNames;
    count?: number;
    onPress: () => void;
}

export const FeedActionItem = ({ svgName, count, onPress }: FeedActionItemProps) => (
    <View style={styles.rootContainer}>
        <Button onPress={onPress}>
            <Svg svgName={svgName} />
        </Button>
        <Typo font="CaptionR">{count}</Typo>
    </View>
);

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
});
