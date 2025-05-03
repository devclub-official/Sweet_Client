import { colors } from "@/theme/colors";
import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

export const SettingLayout = ({ children }: PropsWithChildren) => {
    return (
        <View style={styles.rootContainer}>${children}</View>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: colors.G19,
        borderRadius: 10,
        padding: 16,
    },
});
