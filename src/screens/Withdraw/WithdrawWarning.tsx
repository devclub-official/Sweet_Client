import { Button } from "@/components/Button";
import { Divider } from "@/components/Divider";
import { SafeAreaScreenWrapper } from "@/components/SafeAreaScreenWrapper";
import { Svg } from "@/components/Svg";
import { Typo } from "@/components/Typo"
import { useSweetNavigation } from "@/hooks/useNavigation";
import { colors } from "@/theme/colors";
import { RootStackScreenList } from "@/types/navigation";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { strings } from "./constants/strings";

export const WithdrawWarning = () => {
    const navigation = useSweetNavigation();
    const [checked, setChecked] = useState(false);

    return (
        <SafeAreaScreenWrapper>
            <View style={styles.rootContainer}>
                <Text style={styles.titleText}>{strings.FINAL_CONFIRMATION_TITLE}</Text>
                <Typo color="CG10" font="CaptionR" style={styles.checkTypo}>{strings.WITHDRAW_WARNING_SUBTITLE}</Typo>
                <View style={styles.alertContainer}>
                    <Svg svgName="AlertCircle" />
                    <Typo color="CG5" font="CaptionR" style={styles.alertTypo}>{strings.WITHDRAW_DATA_DELETION_NOTICE}</Typo>
                </View>
                <Text style={styles.dataRetentionNoticeText}>{strings.WITHDRAW_LEGAL_RETENTION_NOTICE}</Text>
                <View style={styles.alertContainer}>
                    <Svg svgName="AlertCircle" />
                    <Typo color="CAUTION02" font="CaptionR" style={styles.alertTypo}>
                        {strings.WITHDRAW_REWARD_DELETION_NOTICE1}
                        <Typo color="CG5" font="CaptionR">
                            {strings.WITHDRAW_REWARD_DELETION_NOTICE2}
                        </Typo>
                    </Typo>
                </View>
                <View style={[styles.alertContainer, styles.snsAlertContainer]}>
                    <Svg svgName="AlertCircle" />
                    <Typo color="CG5" font="CaptionR" style={styles.alertTypo}>{strings.WITHDRAW_SNS_LINKED_ACCOUNT_NOTICE}</Typo>
                </View>
                <Divider style={styles.divider} />
                <View style={styles.checkContainer}>
                    <TouchableOpacity style={checked ? styles.checkBoxChecked : styles.checkBoxUnchecked}
                        onPress={() => setChecked(!checked)}>
                        {checked ? <Svg svgName="Check" options={{ color: colors.B_BASE_PRI }} /> : null}
                    </TouchableOpacity>
                    <Typo color="CAUTION02" font="BodyMediumR" style={styles.alertTypo}>
                        {strings.REQUIRED}
                        <Typo color="CG5" font="BodyMediumR">
                            {strings.WITHDRAW_AGREEMENT_CONFIRM_TEXT}
                        </Typo>
                    </Typo>
                </View>
            </View>
            <View style={styles.nextButtonContainer}>
                <Button
                    disabled={!checked}
                    onPress={() => {
                        navigation.push(RootStackScreenList.WithdrawComplete);
                    }}
                >
                    {strings.WITHDRAW}
                </Button>
            </View>
        </SafeAreaScreenWrapper>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 20,
    },
    titleText: {
        fontSize: 24,
        lineHeight: 32,
        letterSpacing: -0.48,
        fontWeight: 500,
        fontFamily: 'Pretendard-Medium',
        color: colors.B_50,
    },
    checkTypo: {
        marginTop: 18,
        marginBottom: 38,
    },
    alertContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 8,
    },
    alertTypo: {
        flex: 1,
    },
    dataRetentionNoticeText: {
        marginTop: 4,
        marginHorizontal: 24,
        marginBottom: 10,
        fontSize: 10,
        lineHeight: 16,
        letterSpacing: -0.2,
        fontWeight: 400,
        fontFamily: 'Pretendard-Regular',
        color: colors.CG5,
    },
    snsAlertContainer: {
        marginTop: 10,
    },
    divider: {
        marginTop: 30,
        marginBottom: 16,
        height: 0.5,
        backgroundColor: colors.CG5,
    },
    checkContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 16,
    },
    checkBoxUnchecked: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: colors.CG5,
        borderRadius: 4,
        backgroundColor: colors.WHITE,
    },
    checkBoxChecked: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: colors.CG5,
        borderRadius: 4,
        backgroundColor: colors.PRI,
    },
    nextButtonContainer: {
        paddingTop: 10,
        paddingHorizontal: 20,
        paddingBottom: 34,
    },
});
