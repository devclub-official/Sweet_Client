import { BottomSheetFlatList, BottomSheetFooter, BottomSheetFooterProps, BottomSheetHandleProps, BottomSheetModal, BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { useCallback, useEffect, useMemo, useState } from "react";
import { commonBottomSheetStyles } from "./styles/commonBottomSheetStyles";
import { useBottomSheetCallbacks } from "./hooks/useBottomSheetCallbacks";
import { Strings } from "./constants/strings";
import { Image, StyleSheet, View } from "react-native";
import { colors } from "@/theme/colors";
import { Typo } from "../Typo";
import { Svg } from "../Svg";
import { FONTS } from '@/theme/fonts';
import { Comment } from "@/models/domain/Feed/Comment";
import { useFeed } from "./hooks/useFeed";

interface CommentBottomSheetProps {
    bottomSheetRef: React.RefObject<BottomSheetModal | null>;
    feedId: string;
    profileImage: string;
    feedAuthor: string;
}

export const CommentBottomSheet = ({ bottomSheetRef, feedId, profileImage, feedAuthor }: CommentBottomSheetProps) => {
    const { renderBackdrop, renderHandle } = useBottomSheetCallbacks();
    const { comments, isLast, setComments, getCommentList, postComment } = useFeed();

    const snapPoints = useMemo(() => ['50%', '90%'], []);

    const [page, setPage] = useState<number>(0);

    const renderFooter = useCallback((footerProps: BottomSheetFooterProps) => (
        <BottomSheetFooter {...footerProps}>
            <View style={styles.footerContainer}>
                <Image
                    style={styles.footerProfileImage}
                    source={{
                        uri: profileImage,
                    }}
                />

                <BottomSheetTextInput
                    style={styles.footerCommentInput}
                    placeholder={Strings.COMMENT_PLACEHOLDER(feedAuthor)}
                    placeholderTextColor='#9B9B9B'
                    onEndEditing={(e) => {
                        postComment(feedId, e.nativeEvent.text);
                    }}
                />
            </View>
        </BottomSheetFooter>
    ), [feedId, profileImage, feedAuthor, postComment]);
    const renderItem = (item: Comment) => (
        <View style={styles.itemContainer}>
            <Image
                style={styles.itemProfileImage}
                source={{
                    uri: item.profileImageUrl,
                }}
            />
            <View style={styles.itemContentContainer}>
                <Typo color="CG1" font="ButtonSmallM">{item.userName}</Typo>
                <Typo color="CG1" font="BodySmallR">{item.content}</Typo>
                <Typo color="CG1" style={styles.itemCommentReplyTypo}>{Strings.REPLY}</Typo>
            </View>
            <Svg svgName="More" />
        </View>
    );

    useEffect(() => {
        setPage(0);
        setComments([]);
        getCommentList(feedId, page);
    }, [feedId, page, setComments, getCommentList]);

    return (
        <BottomSheetModal
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            enableDynamicSizing={false}
            keyboardBehavior="interactive"
            keyboardBlurBehavior="restore"
            android_keyboardInputMode="adjustResize"
            backgroundStyle={commonBottomSheetStyles.background}
            handleStyle={commonBottomSheetStyles.handle}
            handleIndicatorStyle={commonBottomSheetStyles.handleIndicator}
            backdropComponent={renderBackdrop}
            handleComponent={(handleProps: BottomSheetHandleProps) => renderHandle(handleProps, Strings.COMMENT)}
            footerComponent={(footerProps: BottomSheetFooterProps) => renderFooter(footerProps)}>
            <BottomSheetFlatList
                data={comments}
                keyExtractor={(item) => item.id}
                renderItem={({ item }: { item: Comment }) => renderItem(item)}
                contentContainerStyle={styles.itemListContainer}
                onEndReached={() => {
                    if (isLast) {
                        return;
                    }

                    setPage((prevPage: number) => prevPage + 1);
                    getCommentList(feedId, page);
                }} />
        </BottomSheetModal>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 30,
        backgroundColor: colors.B_BASE_PRI,
    },
    footerProfileImage: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    footerCommentInput: {
        flex: 1,
        backgroundColor: colors.B,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: colors.B_700,
        paddingVertical: 11,
        paddingHorizontal: 16,
        ...FONTS.BodySmallR,
        color: colors.CG1,
    },
    itemListContainer: {
        paddingBottom: 90,
    },
    itemContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 8,
        paddingHorizontal: 20,
    },
    itemProfileImage: {
        width: 24,
        height: 24,
        borderRadius: 12,
    },
    itemContentContainer: {
        marginHorizontal: 8,
        flex: 1,
    },
    itemCommentReplyTypo: {
        marginTop: 8,
    },
});
