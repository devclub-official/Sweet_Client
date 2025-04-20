import { Button } from '@/components/Button';
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
import { Comment } from '@/models/Feed/comment';
import { FollowStatus } from '@/models/Feed/common';
import { Exercise } from '@/models/Feed/exercise';
import { Feed } from '@/models/Feed/feed';
import { Like } from '@/models/Feed/like';
import { colors } from '@/theme/colors';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect, useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const feed: Feed = {
  id: '1',
  profileImage: 'https://plus.unsplash.com/premium_photo-1732697815367-80c3262419be?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  author: 'Kim_nugu',
  date: '2024 september 19',
  followStatus: FollowStatus.NOT_FOLLOWING,
  imageList: [
    'https://plus.unsplash.com/premium_photo-1732697815367-80c3262419be?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1732697815367-80c3262419be?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  likeCnt: 0,
  commentCnt: 0,
  content: '오늘은 웨이트 오늘은 웨이트 오늘은 웨이트 오늘은 웨이트 오늘은 웨이트 오늘은 웨이트 오늘은 웨이트 오늘은 웨이트 오늘은 웨이트 오늘은 웨이트 오늘은 웨이트 오늘은 웨이트 오늘은 웨이트 오늘은 웨이트 오늘은 웨이트 오늘은 웨이트 오늘은 웨이트 오늘은 웨이트 오늘은 웨이트 오늘은 웨이트 오늘은 웨이트 오늘은 웨이트',
};

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
    followStatus: FollowStatus.NOT_FOLLOWING,
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
    followStatus: FollowStatus.NOT_FOLLOWING,
  },
];

const comments: Comment[] = [
  {
    id: '1',
    profileImage: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    commenter: 'commenter1',
    content: 'content1',
  },
  {
    id: '2',
    profileImage: 'https://plus.unsplash.com/premium_photo-1732697815367-80c3262419be?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    commenter: 'commenter2',
    content: 'content2',
  },
  {
    id: '3',
    profileImage: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    commenter: 'commenter3',
    content: 'content3',
  },
  {
    id: '4',
    profileImage: 'https://plus.unsplash.com/premium_photo-1732697815367-80c3262419be?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    commenter: 'commenter4',
    content: 'content4',
  },
];

export const FeedDetail = () => {
  const renderFollowTypo = () => <Typo style={styles.followTypo}>{Strings.FOLLOW}</Typo>;

  const renderRightHeader = () => (
    <View style={styles.headerRightContainer}>
      <Button>
        <Svg svgName="NewAlarm" />
      </Button>
      <Button onPress={() => handlePresentModalPress(feedOptionBottomSheetModalRef)}>
        <Svg svgName="More" />
      </Button>
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

  return (
    <SafeAreaScreenWrapper>
      <AppStatusBar backgroundColor={colors.B_BASE_PRI} />

      <ScrollView contentContainerStyle={styles.rootContainer}>
        <FeedProfile
          profileImage={feed.profileImage}
          author={feed.author}
          date={feed.date}
          rightComponent={() => (
            feed.followStatus === FollowStatus.NOT_FOLLOWING ? renderFollowTypo() : null
          )}
        />

        <FeedImagePager
          images={feed.imageList}
          onPressMoreButton={() => {
            handlePresentModalPress(exerciseBottomSheetModalRef);
          }} />

        <View style={styles.actionsContainer}>
          <FeedActionItem
            svgName="Heart"
            count={likes.length}
            onPress={() => {
              handlePresentModalPress(likeBottomSheetModalRef);
            }}
          />
          <FeedActionItem
            svgName="Comment"
            count={comments.length}
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
          nickname={feed.author}
          content={feed.content} />

        {
          comments.length > 0 ? (
            <>
              <Divider style={styles.divider} />
              <View style={styles.commentListContainer}>
                {
                  comments.slice(0, 3).map((comment: Comment) => (
                    <ContentItem
                      key={comment.id}
                      nickname={comment.commenter}
                      content={comment.content} />
                  ))
                }
              </View>
              <Typo
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
        likes={likes} />

      <CommentBottomSheet
        bottomSheetRef={commentBottomSheetModalRef}
        profileImage={feed.profileImage}
        feedAuthor={feed.author}
        comments={comments} />
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
  followTypo: {
    color: colors.PRI,
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
    color: '#CDCDCD',
  },
});
