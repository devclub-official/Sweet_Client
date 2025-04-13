import { StyleSheet, View, ViewStyle } from "react-native";
import { Button } from "../Button";
import { Typo } from "../Typo";
import { Svg } from "../Svg";
import { SvgNames } from "@/types/svg";

interface FeedActionsProps {
    style?: ViewStyle;
    likeCount: number;
    commentCount: number
}

interface ActionItemProps {
    svgName: SvgNames;
    count?: number
}

const ActionItem = ({ svgName, count }: ActionItemProps) => (
    <View style={feedActionsStyles.actionItemView}>
        <Button>
            <Svg svgName={svgName} />
        </Button>
        <Typo style={feedActionsStyles.feedActionsTypo}>{count}</Typo>
    </View>
);

export const FeedActions = (props: FeedActionsProps) => (
    <View style={[feedActionsStyles.rootView, props.style]}>
        <ActionItem svgName="Heart" count={props.likeCount} />
        <ActionItem svgName="Comment" count={props.commentCount} />
        <ActionItem svgName="Share" />
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