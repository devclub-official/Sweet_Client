import { Button } from "@/components/Button";
import { SafeAreaScreenWrapper } from "@/components/SafeAreaScreenWrapper";
import { Svg } from "@/components/Svg";
import { Typo } from "@/components/Typo"
import { useSweetNavigation } from "@/hooks/useNavigation";
import { colors } from "@/theme/colors";
import { FONTS } from "@/theme/fonts";
import { RootStackScreenList } from "@/types/navigation";
import { useRef, useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Menu } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { strings } from "./constants/strings";

export const WithdrawReason = () => {
    const navigation = useSweetNavigation();
    const { top, bottom } = useSafeAreaInsets();

    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState<string>(strings.SELECT);
    const [feedback, setFeedback] = useState('');
    const anchorRef = useRef(null);
    const scrollRef = useRef<KeyboardAwareScrollView>(null);
    const inputRef = useRef<TextInput>(null);

    const menuItems = [
        strings.SELECT,
        strings.SERVICE_FUNCTION_ERROR,
        strings.LACK_OF_FUNCTION,
        strings.PERSONAL_INFO_LEAK,
        strings.OTHER,
    ];

    return (
        <SafeAreaScreenWrapper>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={styles.keyboardAvoidContainer}
                keyboardVerticalOffset={Platform.OS === 'ios' ? top + bottom : 0}
            >
                <KeyboardAwareScrollView
                    ref={scrollRef}
                    enableOnAndroid={true}
                    extraScrollHeight={Platform.OS === 'ios' ? 20 : 100}
                    keyboardShouldPersistTaps="handled"
                    keyboardOpeningTime={0} // iOS에서 권장
                >
                    <View style={styles.reasonContainer}>
                        <Text style={styles.nicknameTypo}>
                            김누구
                            <Text style={styles.titleTypo}>{strings.FAREWELL_MESSAGE}</Text>
                        </Text>
                        <Typo color="CG10" font="CaptionR">
                            {strings.ACCOUNT_DELETION_WARNING}
                        </Typo>
                        <Typo color="CG1" font="SubMediumB" style={styles.reasonTypo}>{strings.LEAVE_REASON_MESSAGE}</Typo>
                        <Menu visible={visible}
                            onDismiss={() => setVisible(false)}
                            anchor={
                                <View style={styles.selectorContainer}>
                                    <Typo color="WHITE" font="BodyMediumR">{selected}</Typo>
                                    <TouchableOpacity ref={anchorRef} onPress={() => setVisible(true)}>
                                        <Svg svgName="ChevronBottom" />
                                    </TouchableOpacity>
                                </View>
                            }
                            anchorPosition="bottom"
                            contentStyle={styles.selectorItemContainer}>
                            {menuItems.map((item, index) => (
                                <Menu.Item
                                    key={(item)}
                                    onPress={() => {
                                        setSelected(item);
                                        setVisible(false);
                                    }}
                                    title={
                                        index === 0 ? (
                                            <View style={styles.firstMenuItemContainer}>
                                                <Svg svgName="Check" />
                                                <Typo color="B_50" font="CaptionR">{item}</Typo>
                                            </View>
                                        ) : <Typo color="B_50" font="CaptionR">{item}</Typo>}
                                    style={index === menuItems.length - 1 ? styles.lastMenuItemContainer : styles.menuItemContainer}
                                />
                            ))}
                        </Menu>
                        {
                            selected === strings.OTHER ? <View style={styles.feedbackInputContainer}>
                                <TextInput
                                    ref={inputRef}
                                    placeholder={strings.INCONVENIENCE_FEEDBACK_MESSAGE}
                                    multiline={true}
                                    maxLength={500}
                                    textAlignVertical="top"
                                    style={styles.feedbackInput}
                                    placeholderTextColor={colors.CG10}
                                    onChangeText={(text) => {
                                        setFeedback(text);
                                    }}
                                    onFocus={() => {
                                        if (Platform.OS === 'ios') {
                                            setTimeout(() => {
                                                inputRef.current?.measure((x, y, width, height, pageX, _) => {
                                                    scrollRef.current?.scrollToPosition(pageX, 242, true);
                                                });
                                            }, 100);
                                        }
                                    }}
                                    value={feedback}
                                />
                                <Typo color="CG10" font="SubSmallM" style={styles.feedbackTextCountTypo}>{`${feedback.length}/500`}</Typo>
                            </View> : null
                        }

                    </View>
                </KeyboardAwareScrollView>
                <View style={styles.nextButtonContainer}>
                    <Button
                        disabled={selected === strings.SELECT || (selected === strings.OTHER && feedback.length === 0)}
                        onPress={() => {
                            navigation.push(RootStackScreenList.WithdrawWarning);
                        }}
                    >
                        {strings.NEXT}
                    </Button>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaScreenWrapper>
    );
};

const styles = StyleSheet.create({
    keyboardAvoidContainer: {
        flex: 1,
    },
    reasonContainer: {
        paddingTop: 20,
        paddingHorizontal: 20,
        flex: 1,
    },
    nextButtonContainer: {
        paddingTop: 10,
        paddingHorizontal: 20,
        paddingBottom: 34,
    },
    nicknameTypo: {
        marginBottom: 10,
        fontSize: 24,
        lineHeight: 32,
        letterSpacing: -0.48,
        fontWeight: 500,
        fontFamily: 'Pretendard-Medium',
        color: colors.PRI,
    },
    titleTypo: {
        fontSize: 24,
        lineHeight: 32,
        letterSpacing: -0.48,
        fontWeight: 500,
        fontFamily: 'Pretendard-Medium',
        color: colors.CG1,
    },
    reasonTypo: {
        marginTop: 30,
        marginBottom: 20,
    },
    selectorContainer: {
        marginBottom: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        backgroundColor: colors.B_700,
        padding: 10,
    },
    selectorItemContainer: {
        borderRadius: 6,
        backgroundColor: colors.B_700,
    },
    firstMenuItemContainer: {
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',
    },
    menuItemContainer: {
        paddingVertical: 10,
        paddingStart: 20,
        paddingEnd: 40,
        borderBottomColor: colors.B_900,
        borderBottomWidth: 0.5,
    },
    lastMenuItemContainer: {
        paddingVertical: 10,
        paddingStart: 20,
        paddingEnd: 40,
    },
    feedbackInputContainer: {
        marginTop: 10,
        height: 210,
        borderRadius: 10,
        backgroundColor: colors.B_700,
        padding: 10,
    },
    feedbackInput: {
        flex: 1,
        color: colors.CG10,
        ...FONTS.BodySmallR,
    },
    feedbackTextCountTypo: {
        textAlign: 'right',
    },
});
