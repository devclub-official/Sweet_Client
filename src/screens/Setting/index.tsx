import { SafeAreaScreenWrapper } from "@/components/SafeAreaScreenWrapper"
import { AppStatusBar } from "@/components/StatusBar"
import { colors } from "@/theme/colors"
import { SettingLayout } from "./components/SettingLayout";
import { StyleSheet, View } from "react-native";
import { SettingItem } from "./components/SettingItem";
import { Divider } from "@/components/Divider";
import { Typo } from "@/components/Typo";
import { strings as settingString } from "./constants/strings";
import { strings } from "@/constants/strings";
import { useSweetNavigation } from "@/hooks/useNavigation";
import { RootStackScreenList } from "@/types/navigation";

export const Setting = () => {
    const navigation = useSweetNavigation();

    return (
        <SafeAreaScreenWrapper>
            <AppStatusBar backgroundColor={colors.B_BASE_PRI} />
            <View style={styles.rootContainer}>
                <SettingLayout>
                    <SettingItem
                        title={settingString.TERMS_OF_SERVICE}
                        onPressNext={() => {
                            navigation.push(RootStackScreenList.TermsOfService);
                        }}
                    />
                    <Divider style={styles.divider} />
                    <View style={styles.versionContainer}>
                        <Typo color="B_50" font="SubSmallM">{settingString.VERSION}</Typo>
                        <Typo color="B_50" font="BodyMediumR">0.0.1</Typo>
                    </View>
                </SettingLayout>
                <SettingLayout>
                    <SettingItem
                        title={strings.WITHDRAW}
                        onPressNext={() => { }}
                    />
                </SettingLayout>
                <SettingLayout>
                    <SettingItem
                        title={strings.LOGOUT}
                        onPressNext={() => { }}
                    />
                </SettingLayout>
            </View>
        </SafeAreaScreenWrapper>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        paddingTop: 20,
        paddingHorizontal: 20,
        gap: 10,
    },
    divider: {
        marginVertical: 10,
    },
    versionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
