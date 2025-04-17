import { StyleSheet, ViewStyle } from "react-native";
import { Button } from "../Button";
import { Typo } from "../Typo";
import { Strings } from "./constants/strings";

interface ViewAllCommentsButtonProps {
    style?: ViewStyle;
    onPress: () => void;
}

export const ViewAllCommentsButton = ({ style, onPress }: ViewAllCommentsButtonProps) => {
    return (
        <Button style={style} onPress={onPress}>
            <Typo style={viewAllCommentsButtonStyle.typo}>{Strings.VIEW_ALL_COMMENTS}</Typo>
        </Button>
    );
};

const viewAllCommentsButtonStyle = StyleSheet.create({
    typo: {
        color: "#CDCDCD",
    },
});