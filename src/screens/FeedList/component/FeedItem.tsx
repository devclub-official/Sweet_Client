import { Strings } from "@/components/Feed/constants/strings";
import { ContentItem } from "@/components/Feed/ContentItem";
import { ExerciseBottomSheet } from "@/components/Feed/ExerciseBottomSheet";
import { FeedActionItem } from "@/components/Feed/FeedActionItem";
import { FeedImagePager } from "@/components/Feed/FeedImagePager";
import { FeedOptionBottomSheet } from "@/components/Feed/FeedOptionBottomSheet";
import { FeedProfile } from "@/components/Feed/FeedProfile";
import { useBottomSheetCallbacks } from "@/components/Feed/hooks/useBottomSheetCallbacks";
import { LikeContainer } from "@/components/Feed/LikeContainer";
import { Svg } from "@/components/Svg";
import { Typo } from "@/components/Typo";
import { Exercise } from "@/models/domain/Feed/exercise";
import { FeedSummary } from "@/models/domain/Feed/FeedSummary";
import { FollowStatus } from "@/models/domain/Feed/FollowStatus";
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

interface FeedItemProps {
    feed: FeedSummary;
    followStatus: FollowStatus;
    onPressLike: (feedId: string) => void;
    onPressComment: (feed: FeedSummary) => void;
}

const renderFeedProfileRightComponent = (followStatus: FollowStatus, onPressOption: () => void) => (
    <View style={styles.profileRightContainer}>
        {followStatus === FollowStatus.UNFOLLOWED ? <Typo color="PRI">{Strings.FOLLOW}</Typo> : null}
        <TouchableOpacity onPress={onPressOption}>
            <Svg svgName="More" />
        </TouchableOpacity>
    </View>
);

export const FeedItem = ({ feed, followStatus, onPressLike, onPressComment }: FeedItemProps) => {
    const feedOptionBottomSheetModalRef = useRef<BottomSheetModal>(null);
    const exerciseBottomSheetModalRef = useRef<BottomSheetModal>(null);
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
                                onPressLike(feed.id);
                            }}
                        />
                    ) : (
                        <FeedActionItem
                            svgName="HeartOutline"
                            count={feed.likeCnt}
                            onPress={() => {
                                onPressLike(feed.id);
                            }}
                        />
                    )
                }
                <FeedActionItem
                    svgName="Comment"
                    count={feed.commentCnt}
                    onPress={() => {
                        onPressComment(feed);
                    }}
                />
                <FeedActionItem
                    svgName="Share"
                    onPress={() => { }}
                />
            </View>

            {
                feed.likeCnt > 0 ? <LikeContainer style={styles.likeContainer} profileImage='' nickname={feed.likeUserName} likeCount={feed.likeCnt - 1} /> : null
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
                            onPressComment(feed);
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
