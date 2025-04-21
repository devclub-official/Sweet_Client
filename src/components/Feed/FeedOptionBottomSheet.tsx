import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Typo } from "../Typo";
import { ColorName, colors } from "@/theme/colors";
import { Divider } from "../Divider";
import { Svg } from "../Svg";
import { Strings } from "./constants/strings";
import { SvgNames } from "@/types/svg";
import { FollowStatus } from "@/models/Feed/common";
import { useBottomSheetCallbacks } from "./hooks/useBottomSheetCallbacks";
import { commonBottomSheetStyles } from "./styles/commonBottomSheetStyles";

interface FeedOptionBottomSheetProps {
    bottomSheetRef: React.RefObject<BottomSheetModal | null>;
    type: FollowStatus;
}

const FeedOption = ({ icon, text, color = 'B_50' }: {
    icon: SvgNames;
    text: string;
    color?: ColorName;
}) => (
    <View style={styles.feedOptionContainer}>
        <Svg svgName={icon} />
        <Typo color={color} font="BodyMediumR">{text}</Typo>
    </View>
);

export const FeedOptionBottomSheet = (props: FeedOptionBottomSheetProps) => {
    const snapPoints = useMemo(() => ['28%'], []);

    //renders
    const { renderBackdrop } = useBottomSheetCallbacks();

    return (
        <BottomSheetModal
            ref={props.bottomSheetRef}
            snapPoints={snapPoints}
            enableDynamicSizing={false}
            backgroundStyle={commonBottomSheetStyles.background}
            handleStyle={commonBottomSheetStyles.handle}
            handleIndicatorStyle={commonBottomSheetStyles.handleIndicator}
            backdropComponent={renderBackdrop}
        >
            <View style={styles.bottomSheetContainer}>
                {props.type === FollowStatus.FOLLOWING ? (
                    <FeedOption icon="PersonDash" text={Strings.UNFOLLOW} />
                ) : (
                    <FeedOption icon="ProfileCircle" text={Strings.ACCOUNT_PROFILE} />
                )}

                <Divider style={styles.divider} />
                <FeedOption icon="EyeSlash" text={Strings.HIDE_POST} />
                <Divider style={styles.divider} />
                <FeedOption icon="OctagonWarning" text={Strings.REPORT} />
            </View>
        </BottomSheetModal>
    );
};

const styles = StyleSheet.create({
    bottomSheetContainer: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 20,
        marginBottom: 57,
        backgroundColor: colors.B_600,
        borderRadius: 10,
    },
    feedOptionContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingHorizontal: 20,
    },
    divider: {
        backgroundColor: colors.B_700,
    },
});
