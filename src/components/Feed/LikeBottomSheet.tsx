import { BottomSheetFlatList, BottomSheetHandleProps, BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useMemo } from "react";
import { commonBottomSheetStyles } from "./styles/commonBottomSheetStyles";
import { useBottomSheetCallbacks } from "./hooks/useBottomSheetCallbacks";
import { Strings } from "./constants/strings";
import { Image, StyleSheet, View } from "react-native";
import { Like } from "@/models/Feed/like";
import { Typo } from "../Typo";
import { FollowStatus } from "@/models/Feed/common";
import { Button } from "../Button";
import { colors } from "@/theme/colors";

interface LikeBottomSheetProps {
    bottomSheetRef: React.RefObject<BottomSheetModal | null>;
    likes: Like[];
}

const renderLikeItem = (item: Like) => (
    <View style={styles.itemContainer}>
        <Image
            style={styles.itemProfileImage}
            source={{
                uri: item.profileImage,
            }}
        />
        <Typo color="CG1" style={styles.itemNicknameTypo}>{item.nickname}</Typo>
        {item.followStatus === FollowStatus.FOLLOWING ? <Button style={styles.itemFollowingButton}><Typo color="B_50">{Strings.FOLLOWING}</Typo></Button> : <Button style={styles.itemFollowButton}><Typo color="B_BASE_PRI">{Strings.FOLLOW}</Typo></Button>}
    </View>
);

export const LikeBottomSheet = ({ bottomSheetRef, likes }: LikeBottomSheetProps) => {
    const snapPoints = useMemo(() => ['50%', '90%'], []);

    const { renderBackdrop, renderHandle } = useBottomSheetCallbacks();

    return (
        <BottomSheetModal
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            enableDynamicSizing={false}
            backgroundStyle={commonBottomSheetStyles.background}
            handleStyle={commonBottomSheetStyles.handle}
            handleIndicatorStyle={commonBottomSheetStyles.handleIndicator}
            backdropComponent={renderBackdrop}
            handleComponent={(props: BottomSheetHandleProps) => renderHandle(props, Strings.LIKE)}>
            <BottomSheetFlatList
                data={likes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }: { item: Like }) => renderLikeItem(item)} />
        </BottomSheetModal>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingStart: 16,
        paddingEnd: 13,
    },
    itemProfileImage: {
        width: 44,
        height: 44,
        borderRadius: 22,
    },
    itemNicknameTypo: {
        marginHorizontal: 13,
        flex: 1,
    },
    itemFollowingButton: {
        borderRadius: 6,
        borderColor: colors.B_50,
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 25,
    },
    itemFollowButton: {
        borderRadius: 6,
        backgroundColor: colors.PRI_500,
        paddingVertical: 8,
        paddingHorizontal: 25,
    },
});
