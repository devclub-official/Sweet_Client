import { Typo } from '@/components/Typo';
import React, { useCallback, useMemo } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { BottomSheetFlatList, BottomSheetFooter, BottomSheetFooterProps, BottomSheetHandleProps, BottomSheetModal, BottomSheetScrollView, BottomSheetTextInput, BottomSheetView } from '@gorhom/bottom-sheet';
import { colors } from '@/theme/colors';
import { Input } from '../Input';
import { Strings } from './constants/strings';
import { Svg } from '../Svg';
import { Comment } from '@/models/feed';
import { commonBottomSheetStyles, useBottomSheetCallbacks } from './bottomSheet';

interface CommentBottomSheetProps {
    commentRef: React.RefObject<BottomSheetModal | null>;
    profileImage: string;
    feedAuthor: string;
    comments: Comment[];
}

export const CommentBottomSheet = (props: CommentBottomSheetProps) => {
    // variables
    const snapPoints = useMemo(() => ['50%', '90%'], []);

    // renders
    const { renderBackdrop, renderHandle } = useBottomSheetCallbacks();
    const renderItem = ({ item }: { item: Comment }) => (
        <View style={styles.commentView}>
            <Image
                style={styles.commentProfileImage}
                source={{
                    uri: item.profileImage,
                }}
            />
            <View style={styles.commentContentView}>
                <Typo style={styles.commentAuthorTypo}>{item.commenter}</Typo>
                <Typo style={styles.commentTypo}>{item.content}</Typo>
                <Typo style={styles.commentReplyTypo}>{Strings.REPLY}</Typo>
            </View>
            <Svg svgName="More" />
        </View>
    );
    const renderFooter = useCallback(
        (footerProps: BottomSheetFooterProps) => (
            <BottomSheetFooter {...footerProps}>
                <View style={styles.footerContainer}>
                    <Image
                        style={styles.footerProfileImage}
                        source={{
                            uri: props.profileImage,
                        }}
                    />
                    <Input
                        style={styles.footerCommentInput}
                        placeholder={Strings.COMMENT_PLACEHOLDER(props.feedAuthor)}
                        placeholderTextColor="#9B9B9B"
                    />
                </View>
            </BottomSheetFooter>
        ),
        [props.profileImage, props.feedAuthor]
    );

    return (
        <BottomSheetModal
            ref={props.commentRef}
            snapPoints={snapPoints}
            enableDynamicSizing={false}
            backgroundStyle={commonBottomSheetStyles.background}
            handleStyle={commonBottomSheetStyles.handle}
            handleIndicatorStyle={commonBottomSheetStyles.handleIndicator}
            backdropComponent={renderBackdrop}
            handleComponent={(handleProps: BottomSheetHandleProps) => renderHandle(handleProps, Strings.COMMENT)}
            footerComponent={renderFooter}
            detached={true}
        >
            <BottomSheetFlatList style={styles.commentList}
                data={props.comments}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => (
                    <View style={{ height: 10 }} />
                )}
                contentContainerStyle={{
                    paddingVertical: 10,
                }}
            />
        </BottomSheetModal>
    );
};

const styles = StyleSheet.create({
    background: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: colors.GRAY_700,
    },
    contentContainer: {
        backgroundColor: colors.GRAY_700,
    },
    handle: {
        backgroundColor: colors.GRAY_700,
        borderWidth: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    handleIndicator: {
        backgroundColor: "white",
    },
    footerContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 30,
        backgroundColor: colors.BLACK,
    },
    footerProfileImage: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    footerCommentInput: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: colors.BLACK,
        borderRadius: 100,
        borderColor: colors.GRAY_700,
        borderWidth: 1,
        color: "#9B9B9B",
    },
    commentList: {
        flex: 1,
    },
    commentView: {
        flexDirection: "row",
        width: "100%",
        paddingVertical: 8,
        paddingHorizontal: 20,
    },
    commentProfileImage: {
        width: 24,
        height: 24,
        borderRadius: 12,
    },
    commentContentView: {
        marginHorizontal: 8,
        flex: 1,
    },
    commentAuthorTypo: {
        color: "#F9F9F9",
    },
    commentTypo: {
        color: "#F9F9F9",
    },
    commentReplyTypo: {
        marginTop: 8,
        color: "#F9F9F9",
    },
});