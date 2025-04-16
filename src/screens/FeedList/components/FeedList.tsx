import { FeedActions } from "@/components/Feed/FeedActions";
import { FeedContent } from "@/components/Feed/FeedContent";
import { FeedImage } from "@/components/Feed/FeedImage";
import { FeedLike } from "@/components/Feed/FeedLike";
import { Profile } from "@/components/Feed/Profile";
import { ViewAllCommentsButton } from "@/components/Feed/ViewAllCommentsButton";
import { Typo } from "@/components/Typo";
import { Feed, FollowStatus } from "@/models/feed";
import { colors } from "@/theme/colors";
import { Strings } from "@/constants/strings";
import { FlatList, View, StyleSheet } from "react-native";
import { useRef, useState } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { CommentBottomSheet } from "@/components/Feed/CommentBottomSheet";
import { FeedOptionBottomSheet } from "@/components/Feed/FeedOptionBottomSheet";
import { Button } from "@/components/Button";
import { useBottomSheetCallbacks } from "@/components/Feed/bottomSheet";
import { ExerciseBottomSheet } from "@/components/Feed/ExerciseBottomSheet";
import { Svg } from "@/components/Svg";

interface FeedListProps {
    followStatus: FollowStatus;
}

export const FeedList = ({ followStatus }: FeedListProps) => {
    const feeds = [
        {
            id: "1",
            profileImage: "https://plus.unsplash.com/premium_photo-1732697815367-80c3262419be?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            author: "Kim_nugu",
            date: "2024 september 19",
            followStatus: followStatus,
            imageList: [
                "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://plus.unsplash.com/premium_photo-1732697815367-80c3262419be?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://plus.unsplash.com/premium_photo-1732697815367-80c3262419be?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
            likeCnt: 108,
            commentCnt: 8,
            mainCommenterProfileImage: "https://plus.unsplash.com/premium_photo-1732697815367-80c3262419be?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            mainCommenter: "chimchakman_",
            content: "오늘은 웨이트!",
            comments: [],
            exercises: [
                {
                    id: "1",
                    exerciseName: "덤벨 풀오버",
                    exerciseInfo: "30KG X 8회 X 5세트",
                },
                {
                    id: "2",
                    exerciseName: "시티드 케이블 로우",
                    exerciseInfo: "30KG X 8회 X 5세트",
                },
                {
                    id: "3",
                    exerciseName: "인클라인 덤벨 벤치 프레스",
                    exerciseInfo: "30KG X 8회 X 5세트",
                },
                {
                    id: "4",
                    exerciseName: "어시스트 풀 업",
                    exerciseInfo: "30KG X 8회 X 5세트",
                },
                {
                    id: "5",
                    exerciseName: "어시스트 딥스",
                    exerciseInfo: "30KG X 8회 X 5세트",
                },
            ],
        },
        {
            id: "2",
            profileImage: "https://plus.unsplash.com/premium_photo-1732697815367-80c3262419be?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            author: "Kim_nugu",
            date: "2024 september 19",
            followStatus: followStatus,
            imageList: [
                "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
            likeCnt: 108,
            commentCnt: 8,
            mainCommenterProfileImage: "https://plus.unsplash.com/premium_photo-1732697815367-80c3262419be?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            mainCommenter: "chimchakman_",
            content: "오늘은 웨이트!",
            comments: [],
            exercises: [],
        },
        {
            id: "3",
            profileImage: "https://plus.unsplash.com/premium_photo-1732697815367-80c3262419be?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            author: "Kim_nugu",
            date: "2024 september 19",
            followStatus: followStatus,
            imageList: [
                "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
            likeCnt: 108,
            commentCnt: 8,
            mainCommenterProfileImage: "https://plus.unsplash.com/premium_photo-1732697815367-80c3262419be?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            mainCommenter: "chimchakman_",
            content: "오늘은 웨이트!",
            comments: [],
            exercises: [],
        },
        {
            id: "4",
            profileImage: "https://plus.unsplash.com/premium_photo-1732697815367-80c3262419be?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            author: "Kim_nugu",
            date: "2024 september 19",
            followStatus: followStatus,
            imageList: [
                "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
            likeCnt: 108,
            commentCnt: 8,
            mainCommenterProfileImage: "https://plus.unsplash.com/premium_photo-1732697815367-80c3262419be?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            mainCommenter: "chimchakman_",
            content: "오늘은 웨이트!",
            comments: [],
            exercises: [],
        },
        {
            id: "5",
            profileImage: "https://plus.unsplash.com/premium_photo-1732697815367-80c3262419be?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            author: "Kim_nugu",
            date: "2024 september 19",
            followStatus: followStatus,
            imageList: [
                "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
            likeCnt: 108,
            commentCnt: 8,
            mainCommenterProfileImage: "https://plus.unsplash.com/premium_photo-1732697815367-80c3262419be?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            mainCommenter: "chimchakman_",
            content: "오늘은 웨이트!",
            comments: [],
            exercises: [],
        },
    ];

    // state
    const [selectedFeed, setSelectedFeed] = useState<Feed | null>(null);

    // ref
    const commentBottomSheetModalRef = useRef<BottomSheetModal>(null);
    const feedOptionBottomSheetModalRef = useRef<BottomSheetModal>(null);
    const exerciseBottomSheetModalRef = useRef<BottomSheetModal>(null);

    // callbacks
    const { handlePresentModalPress } = useBottomSheetCallbacks();

    // renders
    const renderRightComponent = (item: Feed) => (
        <View style={styles.profileRightComponent}>
            {followStatus === FollowStatus.NOT_FOLLOWING ? <Typo style={styles.followTypo}>{Strings.FOLLOW}</Typo> : null}
            <Button onPress={() => {
                setSelectedFeed(item);
                handlePresentModalPress(feedOptionBottomSheetModalRef);
            }}>
                <Svg svgName="More" />
            </Button>
        </View>
    );
    const renderItemSeparator = () => (<View style={styles.feedItemSeparator} />);
    const renderItem = ({ item }: { item: Feed }) => {
        const {
            profileImage,
            date,
            imageList,
            commentCnt,
            mainCommenterProfileImage,
            mainCommenter,
            likeCnt,
            author,
            content,
        } = item;

        return (
            <View style={styles.feedItemContainer}>
                <Profile
                    profileImage={profileImage}
                    author={author}
                    date={date}
                    rightComponent={() => renderRightComponent(item)}
                />
                <FeedImage
                    images={imageList}
                    onPressMoreButton={() => {
                        setSelectedFeed(item);
                        handlePresentModalPress(exerciseBottomSheetModalRef);
                    }}
                />
                <FeedActions
                    style={imageList.length === 1 ? styles.feedActionsWithSingleImage : styles.feedActionsWithMultipleImages}
                    likeCount={likeCnt}
                    commentCount={commentCnt}
                    onPressComment={() => {
                        setSelectedFeed(item);
                        handlePresentModalPress(commentBottomSheetModalRef);
                    }}
                />
                <FeedLike
                    style={styles.feedLikeContainer}
                    mainCommenterProfileImage={mainCommenterProfileImage}
                    mainCommenter={mainCommenter}
                    likeCount={likeCnt}
                />
                <FeedContent
                    style={styles.feedContentContainer}
                    nickname={author}
                    content={content}
                />
                <ViewAllCommentsButton style={styles.viewAllCommentsButton} />
            </View>
        );
    };

    return (
        <>
            <FlatList
                data={feeds}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                // TODO: onEndReached={}
                onEndReachedThreshold={0.5}
                ItemSeparatorComponent={renderItemSeparator}
                contentContainerStyle={styles.rootContainer} />

            <CommentBottomSheet
                commentRef={commentBottomSheetModalRef}
                profileImage={selectedFeed?.profileImage ?? ''}
                feedAuthor={selectedFeed?.author ?? ''}
                comments={selectedFeed?.comments ?? []}
            />
            <FeedOptionBottomSheet
                bottomSheetRef={feedOptionBottomSheetModalRef}
                type={selectedFeed?.followStatus ?? FollowStatus.FOLLOWING} />
            <ExerciseBottomSheet
                bottomSheetRef={exerciseBottomSheetModalRef}
                exercises={selectedFeed?.exercises ?? []}
            />
        </>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        paddingHorizontal: 11,
        paddingVertical: 16,
    },
    feedItemContainer: {
        backgroundColor: colors.GRAY_700,
        borderRadius: 20,
    },
    feedItemSeparator: {
        height: 10,
    },
    profileRightComponent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
    },
    followTypo: {
        color: colors.PRIMARY,
    },
    feedActionsWithSingleImage: {
        marginHorizontal: 16,
        marginTop: 16,
        marginBottom: 16,
    },
    feedActionsWithMultipleImages: {
        marginHorizontal: 16,
        marginTop: 0,
        marginBottom: 16,
    },
    feedLikeContainer: {
        marginHorizontal: 16,
    },
    feedContentContainer: {
        marginHorizontal: 16,
        marginTop: 8,
        marginBottom: 4,
    },
    viewAllCommentsButton: {
        marginHorizontal: 16,
        marginBottom: 16,
    },
});