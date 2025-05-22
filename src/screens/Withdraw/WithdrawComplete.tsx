import { Button } from "@/components/Button";
import { SafeAreaScreenWrapper } from "@/components/SafeAreaScreenWrapper";
import { Typo } from "@/components/Typo";
import { colors } from "@/theme/colors";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { strings } from "./constants/strings";

export const WithdrawComplete = () => {
    return (
        <SafeAreaScreenWrapper>
            <ImageBackground
                source={require('../../../assets/image/withdraw_background.png')}
                style={styles.rootContainer}>
                <Text style={styles.titleText}>{strings.WITHDRAW_SUCCESS_MESSAGE}</Text>
                <Typo color="CG5" font="CaptionR">
                    {strings.WITHDRAW_THANK_YOU_MESSAGE1}
                    <Typo color="PRI" font="CaptionR">
                        {strings.WITHDRAW_THANK_YOU_MESSAGE2}
                    </Typo>
                    {strings.WITHDRAW_THANK_YOU_MESSAGE3}
                </Typo>
            </ImageBackground>
            <View style={styles.navigateToLoginContainer}>
                <Button onPress={() => {}}>
                    {strings.NAVIGATE_TO_LOGIN_TEXT}
                </Button>
            </View>
        </SafeAreaScreenWrapper>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    navigateToLoginContainer: {
        paddingTop: 10,
        paddingHorizontal: 20,
        paddingBottom: 34,
    },
    titleText: {
        marginBottom: 10,
        fontSize: 24,
        lineHeight: 32,
        letterSpacing: -0.48,
        fontWeight: 500,
        fontFamily: 'Pretendard-Medium',
        color: colors.B_50,
    },
});
