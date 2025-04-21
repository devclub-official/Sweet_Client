import { Svg } from "@/components/Svg";
import { RootStackParamList, RootStackScreenList } from "@/types/navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { useCallback } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export const useFeedListCallbacks = () => {
    const renderHeaderTitle = useCallback(() => (
        <Svg svgName="Logo" />
    ), []);

    const renderHeaderRight = useCallback((navigation: StackNavigationProp<RootStackParamList, string>) => (
        <View style={styles.headerRightContainer}>
            <TouchableOpacity>
                <Svg svgName="Plus" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate(RootStackScreenList.FeedDetail);
            }}>
                <Svg svgName="NewAlarm" />
            </TouchableOpacity>
        </View>
    ), []);

    return {
        renderHeaderTitle,
        renderHeaderRight,
    };
};

const styles = StyleSheet.create({
    headerRightContainer: {
        flexDirection: 'row',
        gap: 12,
    },
});
