import { ChevronRight } from "@/assets/svgs/ChevronRight";
import { Typo } from "@/components/Typo";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface SettingItemProps {
    title: string;
    onPressNext: () => void;
}

export const SettingItem = ({ title, onPressNext }: SettingItemProps) => {
    return (
        <View style={styles.rootContainer}>
            <Typo color="B_50" font="SubSmallM">{title}</Typo>
            <TouchableOpacity onPress={onPressNext}>
                <ChevronRight />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
