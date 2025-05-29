import { Divider } from '@/components/Divider';
import { CommentBottomSheet } from '@/components/Feed/CommentBottomSheet';
import { Strings } from '@/components/Feed/constants/strings';
import { ContentItem } from '@/components/Feed/ContentItem';
import { ExerciseBottomSheet } from '@/components/Feed/ExerciseBottomSheet';
import { FeedActionItem } from '@/components/Feed/FeedActionItem';
import { FeedImagePager } from '@/components/Feed/FeedImagePager';
import { FeedOptionBottomSheet } from '@/components/Feed/FeedOptionBottomSheet';
import { FeedProfile } from '@/components/Feed/FeedProfile';
import { useBottomSheetCallbacks } from '@/components/Feed/hooks/useBottomSheetCallbacks';
import { LikeBottomSheet } from '@/components/Feed/LikeBottomSheet';
import { LikeContainer } from '@/components/Feed/LikeContainer';
import { SafeAreaScreenWrapper } from '@/components/SafeAreaScreenWrapper';
import { AppStatusBar } from '@/components/StatusBar';
import { Svg } from '@/components/Svg';
import { Typo } from '@/components/Typo';
import { Exercise } from '@/models/domain/Feed/exercise';
import { FollowStatus } from '@/models/domain/Feed/FollowStatus';
import { colors } from '@/theme/colors';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect, useRef } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useFeedDetail } from './hooks/useFeedDetail';
import { CommentSummary } from '@/models/domain/Feed/FeedDetail';
import { RootStackScreenList, RouteParams } from '@/types/navigation';

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

interface FeedDetailProps {
  route: RouteParams<RootStackScreenList.FeedDetail>
}

export const FeedDetail = ({ route }: FeedDetailProps) => {
  const renderFollowTypo = () => <Typo color="PRI" onPress={() => {
    if (feed) {
      followUser(feed.authorId);
    }
  }}>{Strings.FOLLOW}</Typo>;

  const renderRightHeader = () => (
    <View style={styles.headerRightContainer}>
      <TouchableOpacity>
        <Svg svgName="NewAlarm" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePresentModalPress(feedOptionBottomSheetModalRef)}>
        <Svg svgName="More" />
      </TouchableOpacity>
    </View>
  );

  const feedOptionBottomSheetModalRef = useRef<BottomSheetModal>(null);
  const exerciseBottomSheetModalRef = useRef<BottomSheetModal>(null);
  const likeBottomSheetModalRef = useRef<BottomSheetModal>(null);
  const commentBottomSheetModalRef = useRef<BottomSheetModal>(null);

  const { handlePresentModalPress } = useBottomSheetCallbacks();

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: renderRightHeader,
    });
  });

  const { feed, likeFeed, unlikeFeed, followUser } = useFeedDetail(route.params?.id);

  return (
    <SafeAreaScreenWrapper>
      <AppStatusBar backgroundColor={colors.B_BASE_PRI} />

      {
        feed && (
          <>
            <ScrollView contentContainerStyle={styles.rootContainer}>
              <FeedProfile
                profileImage={feed.authorProfileImage}
                author={feed.authorName}
                date={feed.date}
                rightComponent={() => (
                  feed.followStatus === FollowStatus.UNFOLLOWED ? renderFollowTypo() : null
                )}
              />

              <FeedImagePager
                images={feed.imageUrls}
                onPressMoreButton={() => {
                  handlePresentModalPress(exerciseBottomSheetModalRef);
                }} />

              <View style={styles.actionsContainer}>
                {
                  feed.isLiked ? (
                    <FeedActionItem
                      svgName="HeartFilled"
                      count={feed.likeCount}
                      onPressIcon={() => {
                        unlikeFeed();
                      }}
                      onPressText={() => {
                        handlePresentModalPress(likeBottomSheetModalRef);
                      }}
                    />
                  ) : (
                    <FeedActionItem
                      svgName="HeartOutline"
                      count={feed.likeCount}
                      onPressIcon={() => {
                        likeFeed();
                      }}
                      onPressText={() => {
                        handlePresentModalPress(likeBottomSheetModalRef);
                      }}
                    />
                  )
                }
                <FeedActionItem
                  svgName="Comment"
                  count={feed.commentCount}
                  onPressIcon={() => {
                    handlePresentModalPress(commentBottomSheetModalRef);
                  }}
                  onPressText={() => {
                    handlePresentModalPress(commentBottomSheetModalRef);
                }}
                />
                <FeedActionItem
                  svgName="Share"
                  onPressIcon={() => { }}
                />
              </View>

              {
                feed.likeCount > 0 ? <LikeContainer style={styles.likeContainer} profileImage={feed.firstLikedUserProfileImageUrl} nickname={feed.firstLikedUserName} likeCount={feed.likeCount - 1} /> : null
              }

              <ContentItem
                style={styles.contentItemContainer}
                nickname={feed.authorName}
                content={feed.content} />

              {
                feed.comments.length > 0 ? (
                  <>
                    <Divider style={styles.divider} />
                    <View style={styles.commentListContainer}>
                      {
                        feed.comments.map((comment: CommentSummary) => (
                          <ContentItem
                            key={comment.commentId}
                            nickname={comment.commenter}
                            content={comment.comment} />
                        ))
                      }
                    </View>
                    <Typo
                      font="CaptionR"
                      style={styles.viewAllCommentsTypo}
                      onPress={() => {
                        handlePresentModalPress(commentBottomSheetModalRef);
                      }}>
                      {Strings.VIEW_ALL_COMMENTS}
                    </Typo>
                  </>

                ) : null
              }
            </ScrollView>

            <FeedOptionBottomSheet
              bottomSheetRef={feedOptionBottomSheetModalRef}
              type={feed.followStatus} />

            <ExerciseBottomSheet
              bottomSheetRef={exerciseBottomSheetModalRef}
              exercises={exercises}
            />

            <LikeBottomSheet
              bottomSheetRef={likeBottomSheetModalRef}
              feedId={feed.id.toString()} />

            <CommentBottomSheet
              bottomSheetRef={commentBottomSheetModalRef}
              feedId={feed.id.toString()}
              profileImage={feed.authorProfileImage}
              feedAuthor={feed.authorName} />
          </>
        )
      }
    </SafeAreaScreenWrapper>
  );
};

const styles = StyleSheet.create({
  headerRightContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  rootContainer: {
    paddingHorizontal: 11.5,
    paddingTop: 20,
    paddingVertical: 36,
  },
  actionsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 16,
    gap: 16,
  },
  likeContainer: {
    marginHorizontal: 10,
    marginBottom: 8,
  },
  contentItemContainer: {
    marginHorizontal: 10,
  },
  divider: {
    marginHorizontal: 10,
    marginTop: 4,
    marginBottom: 8,
  },
  commentListContainer: {
    flexDirection: 'column',
    marginHorizontal: 10,
    gap: 4,
  },
  viewAllCommentsTypo: {
    marginHorizontal: 10,
    marginTop: 4,
  },
});
