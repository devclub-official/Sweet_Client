import { Menu } from "@/assets/svgs/Menu";
import { NewAlarm } from "@/assets/svgs/NewAlarm";
import { useSweetNavigation } from "@/hooks/useNavigation";
import { RootStackScreenList } from "@/types/navigation";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export const HeaderRight = () => {
    const navigation = useSweetNavigation();

    return (
        <View style={styles.rootContainer}>
            <NewAlarm />
            <TouchableOpacity onPress={() => {
                navigation.push(RootStackScreenList.Setting);
            }}>
                <Menu />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: 'row',
        gap: 12,
    },
});
