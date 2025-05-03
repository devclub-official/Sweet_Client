import { Menu } from "@/assets/svgs/Menu";
import { NewAlarm } from "@/assets/svgs/NewAlarm";
import { StyleSheet, View } from "react-native";

export const HeaderRight = () => (
    <View style={styles.rootContainer}>
        <NewAlarm />
        <Menu />
    </View>
);

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: 'row',
        gap: 12,
    },
});
