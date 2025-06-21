import { SafeAreaScreenWrapper } from "@/components/SafeAreaScreenWrapper"
import { Typo } from "@/components/Typo"
import { View } from "react-native"

export const Group = () => {
    return (
        <SafeAreaScreenWrapper>
            <View style={{
                flex: 1,
            }}>
                <Typo>그룹탭입니다.</Typo>
            </View>
        </SafeAreaScreenWrapper>
    );
};
