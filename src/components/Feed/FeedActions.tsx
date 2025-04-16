import { StyleSheet, View, ViewStyle } from "react-native";
import { Button } from "../Button";
import { Typo } from "../Typo";
import { Svg } from "../Svg";
import { SvgNames } from "@/types/svg";

interface FeedActionsProps {
    style?: ViewStyle;
    likeCount: number;
    commentCount: number;
    onPressComment: () => void;
}

interface ActionItemProps {
    svgName: SvgNames;
    count?: number;
    onPress: () => void;
}

const ActionItem = ({ svgName, count, onPress }: ActionItemProps) => (
    <View style={feedActionsStyles.actionItemView}>
        <Button onPress={onPress}>
            <Svg svgName={svgName} />
        </Button>
        <Typo style={feedActionsStyles.feedActionsTypo}>{count}</Typo>
    </View>
);

export const FeedActions = (props: FeedActionsProps) => (
    <View style={[feedActionsStyles.rootView, props.style]}>
        <ActionItem svgName="Heart" count={props.likeCount} onPress={() => { }} />
        <ActionItem svgName="Comment" count={props.commentCount} onPress={props.onPressComment} />
        <ActionItem svgName="Share" onPress={() => { }} />
    </View>
);

const feedActionsStyles = StyleSheet.create({
    rootView: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
    },
    feedActionsTypo: {
        color: "#CDCDCD",
    },
    actionItemView: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
});