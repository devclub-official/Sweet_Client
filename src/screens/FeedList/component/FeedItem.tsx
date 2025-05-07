import { CommentBottomSheet } from "@/components/Feed/CommentBottomSheet";
import { Strings } from "@/components/Feed/constants/strings";
import { ContentItem } from "@/components/Feed/ContentItem";
import { ExerciseBottomSheet } from "@/components/Feed/ExerciseBottomSheet";
import { FeedActionItem } from "@/components/Feed/FeedActionItem";
import { FeedImagePager } from "@/components/Feed/FeedImagePager";
import { FeedOptionBottomSheet } from "@/components/Feed/FeedOptionBottomSheet";
import { FeedProfile } from "@/components/Feed/FeedProfile";
import { useBottomSheetCallbacks } from "@/components/Feed/hooks/useBottomSheetCallbacks";
import { LikeBottomSheet } from "@/components/Feed/LikeBottomSheet";
import { LikeContainer } from "@/components/Feed/LikeContainer";
import { Svg } from "@/components/Svg";
import { Typo } from "@/components/Typo";
import { Exercise } from "@/models/domain/Feed/exercise";
import { FeedSummary } from "@/models/domain/Feed/FeedSummary";
import { FollowStatus } from "@/models/domain/Feed/FollowStatus";
import { Like } from "@/models/domain/Feed/like";
import { colors } from "@/theme/colors";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const exercises: Exercise[] = [
    {
        id: '1',
        exerciseName: '덤벨 풀오버',
        exerciseInfo: '30KG X 8회 X 5세트',
    },
    {
        id: '2',
        exerciseName: '시티드 케이블 로우',
        exerciseInfo: '30KG X 8회 X 5세트',
    },
    {
        id: '3',
        exerciseName: '인클라인 덤벨 벤치 프레스',
        exerciseInfo: '30KG X 8회 X 5세트',
    },
    {
        id: '4',
        exerciseName: '어시스트 풀 업',
        exerciseInfo: '30KG X 8회 X 5세트',
    },
    {
        id: '5',
        exerciseName: '어시스트 딥스',
        exerciseInfo: '30KG X 8회 X 5세트',
    },
];

const likes: Like[] = [
    {
        id: '1',
        profileImage: 'https://plus.unsplash.com/premium_photo-1732697815367-80c3262419be?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        nickname: 'nickname1',
        followStatus: FollowStatus.FOLLOWING,
    },
    {
        id: '2',
        profileImage: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        nickname: 'nickname2',
        followStatus: FollowStatus.UNFOLLOWED,
    },
    {
        id: '3',
        profileImage: 'https://plus.unsplash.com/premium_photo-1732697815367-80c3262419be?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        nickname: 'nickname3',
        followStatus: FollowStatus.FOLLOWING,
    },
    {
        id: '4',
        profileImage: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        nickname: 'nickname4',
        followStatus: FollowStatus.UNFOLLOWED,
    },
];

interface FeedItemProps {
    feed: FeedSummary;
    followStatus: FollowStatus;
}

const renderFeedProfileRightComponent = (followStatus: FollowStatus, onPressOption: () => void) => (
    <View style={styles.profileRightContainer}>
        {followStatus === FollowStatus.UNFOLLOWED ? <Typo color="PRI">{Strings.FOLLOW}</Typo> : null}
        <TouchableOpacity onPress={onPressOption}>
            <Svg svgName="More" />
        </TouchableOpacity>
    </View>
);

export const FeedItem = ({ feed, followStatus }: FeedItemProps) => {
    const feedOptionBottomSheetModalRef = useRef<BottomSheetModal>(null);
    const exerciseBottomSheetModalRef = useRef<BottomSheetModal>(null);
    const likeBottomSheetModalRef = useRef<BottomSheetModal>(null);
    const commentBottomSheetModalRef = useRef<BottomSheetModal>(null);
    const { handlePresentModalPress } = useBottomSheetCallbacks();

    return (
        <View style={styles.rootContainer}>
            <FeedProfile
                profileImage={feed.profileImage}
                author={feed.authorName}
                date={feed.date}
                rightComponent={() => renderFeedProfileRightComponent(
                    followStatus,
                    () => {
                        handlePresentModalPress(feedOptionBottomSheetModalRef);
                    },
                )}
            />

            <FeedImagePager
                images={feed.imageUrls}
                onPressMoreButton={() => {
                    handlePresentModalPress(exerciseBottomSheetModalRef);
                }}
            />

            <View style={styles.actionsContainer}>
                {
                    feed.isLiked ? (
                        <FeedActionItem
                            svgName="HeartFilled"
                            count={feed.likeCnt}
                            onPress={() => {
                                handlePresentModalPress(likeBottomSheetModalRef);
                            }}
                        />
                    ) : (
                        <FeedActionItem
                            svgName="HeartOutline"
                            count={feed.likeCnt}
                            onPress={() => {
                                handlePresentModalPress(likeBottomSheetModalRef);
                            }}
                        />
                    )
                }
                <FeedActionItem
                    svgName="Comment"
                    count={feed.commentCnt}
                    onPress={() => {
                        handlePresentModalPress(commentBottomSheetModalRef);
                    }}
                />
                <FeedActionItem
                    svgName="Share"
                    onPress={() => { }}
                />
            </View>

            {
                likes.length > 0 ? <LikeContainer style={styles.likeContainer} profileImage={likes[0].profileImage} nickname={likes[0].nickname} likeCount={likes.length} /> : null
            }

            <ContentItem
                style={styles.contentItemContainer}
                nickname={feed.authorName}
                content={feed.feedContent} />

            {
                feed.commentCnt > 0 ?
                    <Typo
                        font="CaptionR"
                        style={styles.viewAllCommentsTypo}
                        onPress={() => {
                            handlePresentModalPress(commentBottomSheetModalRef);
                        }}>
                        {Strings.VIEW_ALL_COMMENTS}
                    </Typo> : null
            }



            <FeedOptionBottomSheet
                bottomSheetRef={feedOptionBottomSheetModalRef}
                type={followStatus} />

            <ExerciseBottomSheet
                bottomSheetRef={exerciseBottomSheetModalRef}
                exercises={exercises}
            />

            <LikeBottomSheet
                bottomSheetRef={likeBottomSheetModalRef}
                likes={likes} />

            <CommentBottomSheet
                bottomSheetRef={commentBottomSheetModalRef}
                profileImage={feed.profileImage}
                feedAuthor={feed.authorName}
                comments={[]} />
        </View>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        borderRadius: 20,
        backgroundColor: colors.B_700,
        paddingBottom: 16,
    },
    profileRightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
    },
    actionsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        marginBottom: 16,
        gap: 16,
    },
    likeContainer: {
        marginHorizontal: 16,
        marginBottom: 8,
    },
    contentItemContainer: {
        marginHorizontal: 16,
    },
    viewAllCommentsTypo: {
        marginHorizontal: 16,
        marginTop: 4,
    },
});
