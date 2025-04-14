import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { commonBottomSheetStyles, useBottomSheetCallbacks } from "./bottomSheet";
import { Typo } from "../Typo";
import { colors } from "@/theme/colors";
import { Divider } from "../Divider";
import { Svg } from "../Svg";
import { Strings } from "./constants/strings";
import { FollowStatus } from "@/models/feed";
import { SvgNames } from "@/types/svg";

interface FeedOptionBottomSheetProps {
    bottomSheetRef: React.RefObject<BottomSheetModal | null>;
    type: FollowStatus;
}

const FeedOption = ({ icon, text, color = colors.GRAY_50 }: {
    icon: SvgNames;
    text: string;
    color?: string;
}) => (
    <View style={styles.feedOption}>
        <Svg svgName={icon} />
        <Typo style={{ color }}>{text}</Typo>
    </View>
);

export const FeedOptionBottomSheet = (props: FeedOptionBottomSheetProps) => {
    const snapPoints = useMemo(() => ["28%"], []);

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
            <View style={styles.bottomSheet}>
                {props.type === FollowStatus.FOLLOWING ? (
                    <FeedOption icon="PersonDash" text={Strings.UNFOLLOW} />
                ) : (
                    <FeedOption icon="ProfileCircle" text={Strings.ACCOUNT_PROFILE} />
                )}

                <Divider style={styles.divider} />
                <FeedOption icon="EyeSlash" text={Strings.HIDE_POST} />
                <Divider style={styles.divider} />
                <FeedOption icon="OctagonWarning" text={Strings.REPORT} color="#FF0034" />
            </View>
        </BottomSheetModal>
    );
};

const styles = StyleSheet.create({
    bottomSheet: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 20,
        marginBottom: 57,
        backgroundColor: colors.GRAY_600,
        borderRadius: 10,
    },
    feedOption: {
        flex: 1,
        flexDirection: "row",
        gap: 8,
        paddingHorizontal: 20,
        alignItems: "center",
    },
    divider: {
        backgroundColor: colors.GRAY_700,
    },
});