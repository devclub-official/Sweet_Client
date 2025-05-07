import { SafeAreaScreenWrapper } from "@/components/SafeAreaScreenWrapper"
import { AppStatusBar } from "@/components/StatusBar"
import { colors } from "@/theme/colors"

export const EditProfile = () => {
    return (
        <SafeAreaScreenWrapper>
            <AppStatusBar backgroundColor={colors.B_BASE_PRI} />
        </SafeAreaScreenWrapper>
    );
};
