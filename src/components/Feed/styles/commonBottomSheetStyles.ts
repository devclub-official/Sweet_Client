import { colors } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const commonBottomSheetStyles = StyleSheet.create({
    background: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: colors.B_700,
    },
    handle: {
        backgroundColor: colors.B_700,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    handleIndicator: {
        backgroundColor: colors.WHITE,
    },
    handleTypo: {
        marginTop: 10.5,
        marginBottom: 12.5,
        width: '100%',
        textAlign: 'center',
    },
});
