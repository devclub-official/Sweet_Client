import { SafeAreaScreenWrapper } from "@/components/SafeAreaScreenWrapper"
import { AppStatusBar } from "@/components/StatusBar"
import { colors } from "@/theme/colors"
import { strings as editProfileStrings } from "./constants/strings";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Input } from "@/components/Input";
import { Typo } from "@/components/Typo";
import { FONTS } from "@/theme/fonts";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button } from "@/components/Button";
import { Camera } from "@/assets/svgs/Camera";
import { strings } from "@/constants/strings";

export const EditProfile = () => {
    return (
        <SafeAreaScreenWrapper>
            <AppStatusBar backgroundColor={colors.B_BASE_PRI} />
            <KeyboardAwareScrollView
                style={styles.editContainer}
                extraScrollHeight={20}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.profileImage}
                        source={{
                            uri: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        }} />
                    <TouchableOpacity style={styles.cameraIcon}>
                        <Camera />
                    </TouchableOpacity>
                </View>
                <View style={[styles.inputContainer, styles.nicknameInputContainer]}>
                    <Typo color="CG10" font="SubSmallM">{strings.NICKNAME}</Typo>
                    <Input
                        style={styles.input}
                        defaultValue="test" />
                </View>
                <View style={[styles.inputContainer, styles.introduceInputContainer]}>
                    <Typo color="CG10" font="SubSmallM">{editProfileStrings.INTRODUCE}</Typo>
                    <View>
                        <Input
                            style={styles.input}
                            defaultValue="반가워요 :)"
                            maxLength={50}
                            multiline={true} />
                        <Typo color="CG10" font="SubSmallM" style={styles.introduceTextCountTypo}>7/50</Typo>
                    </View>
                </View>
            </KeyboardAwareScrollView>
            <View style={styles.completeButtonContainer}>
                <Button>{editProfileStrings.COMPLETE}</Button>
            </View>
        </SafeAreaScreenWrapper>
    );
};

const styles = StyleSheet.create({
    editContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    imageContainer: {
        position: 'relative',
        alignSelf: 'center',
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 36,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: colors.B_50,
    },
    profileImage: {
        marginTop: 20,
        justifyContent: 'center',
        width: 120,
        height: 120,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: colors.B_50,
    },
    inputContainer: {
        width: '100%',
        padding: 20,
        borderRadius: 20,
        backgroundColor: colors.B_700,
        gap: 12,
    },
    nicknameInputContainer: {
        marginTop: 50,
    },
    introduceInputContainer: {
        marginTop: 20,
    },
    input: {
        color: colors.CG1,
        ...FONTS.SubMediumB,
    },
    introduceTextCountTypo: {
        textAlign: 'right',
    },
    completeButtonContainer: {
        marginTop: 40,
        marginHorizontal: 20,
        marginBottom: 30,
    },
});
