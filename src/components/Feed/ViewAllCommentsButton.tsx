import { StyleSheet, ViewStyle } from "react-native";
import { Button } from "../Button";
import { Typo } from "../Typo";
import { Strings } from "./constants/strings";

interface ViewAllCommentsButtonProps {
    style?: ViewStyle;
}

export const ViewAllCommentsButton = (props: ViewAllCommentsButtonProps) => {
    return (
        <Button style={props.style}>
            <Typo style={viewAllCommentsButtonStyle.typo}>{Strings.VIEW_ALL_COMMENTS}</Typo>
        </Button>
    );
};

const viewAllCommentsButtonStyle = StyleSheet.create({
    typo: {
        color: "#CDCDCD",
    },
});