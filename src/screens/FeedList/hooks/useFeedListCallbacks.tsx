import { Button } from "@/components/Button";
import { Svg } from "@/components/Svg";
import { RootStackParamList, RootStackScreenList } from "@/types/navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { useCallback } from "react";
import { StyleSheet, View } from "react-native";

export const useFeedListCallbacks = () => {
    const renderHeaderTitle = useCallback(() => (
        <Svg svgName="Logo" />
    ), []);

    const renderHeaderRight = useCallback((navigation: StackNavigationProp<RootStackParamList, string>) => (
        <View style={styles.headerRightContainer}>
            <Button>
                <Svg svgName="Plus" />
            </Button>
            <Button onPress={() => {
                navigation.navigate(RootStackScreenList.FeedDetail);
            }}>
                <Svg svgName="NewAlarm" />
            </Button>
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
