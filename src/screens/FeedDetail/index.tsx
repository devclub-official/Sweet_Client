import { Button } from '@/components/Button';
import { FeedActions } from '@/components/Feed/FeedActions';
import { FeedContent } from '@/components/Feed/FeedContent';
import { FeedImage } from '@/components/Feed/FeedImage';
import { FeedLike } from '@/components/Feed/FeedLike';
import { Profile } from '@/components/Feed/Profile';
import { ViewAllCommentsButton } from '@/components/Feed/ViewAllCommentsButton';
import { Typo } from '@/components/Typo';
import { Comment, Feed, FollowStatus } from '@/models/feed';
import { colors } from '@/theme/colors';
import { Strings } from '@/constants/strings';
import { ScrollView, StyleSheet, View } from 'react-native';
import { CommentBottomSheet } from '@/components/Feed/CommentBottomSheet';
import { useLayoutEffect, useRef } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useBottomSheetCallbacks } from '@/components/Feed/bottomSheet';
import { FeedOptionBottomSheet } from '@/components/Feed/FeedOptionBottomSheet';
import { SafeAreaScreenWrapper } from '@/components/SafeAreaScreenWrapper';
import { Divider } from '@/components/Divider';
import { useNavigation } from '@react-navigation/native';
import { Svg } from '@/components/Svg';
import { ExerciseBottomSheet } from '@/components/Feed/ExerciseBottomSheet';

export const FeedDetail = () => {
  const feed: Feed = {
    id: "1",
    profileImage: "https://plus.unsplash.com/premium_photo-1732697815367-80c3262419be?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Kim_nugu",
    date: "2024 september 19",
    followStatus: FollowStatus.FOLLOWING,
    imageList: [
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1732697815367-80c3262419be?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1732697815367-80c3262419be?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    likeCnt: 108,
    commentCnt: 0,
    mainCommenterProfileImage: "https://plus.unsplash.com/premium_photo-1732697815367-80c3262419be?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mainCommenter: "chimchakman_",
    content: "2025년 4월 17일 (목)\n오늘은 아침 6시에 일어나 바로 러닝화를 신고 집 앞 공원으로 나갔다.\n날씨는 약간 흐렸지만 달리기에는 선선해서 괜찮았다.\n총 5km를 뛰었고, 1km당 평균 페이스는 6분 20초 정도.\n중간에 호흡이 조금 가빠져서 3km 지점에서 1분 정도 빠르게 걷고 다시 뛰었다.\n런닝 끝나고 스트레칭 10분 정도 해줌. 종아리가 조금 뻐근한 느낌이 있었지만 괜찮은 수준.\n오전 9시쯤에는 유산소 대신 상체 웨이트 트레이닝을 진행했다.\n벤치프레스 40kg × 10회 × 3세트\n랫풀다운 30kg × 12회 × 3세트\n숄더프레스 머신 20kg × 10회 × 3세트\n마지막으로 플랭크 1분 × 3세트 진행. 중심 잡기가 힘들었지만 끝까지 버팀.\n운동 후 단백질 쉐이크 1스쿱 마셨고, 점심은 닭가슴살 샐러드와 고구마.\n전체적으로 컨디션은 양호했으나 벤치프레스에서 팔꿈치 쪽에 약간 뻐근함이 있었음.\n다음 운동 때는 무게를 조금 줄이고 자세 점검을 해야 할 듯.\n운동하면서 들은 음악은 Chillhop 재생목록 — 집중도 높아져서 좋았음.\n요즘 확실히 운동 루틴이 몸에 익어가는 느낌이 든다.\n특히 아침 러닝은 하루를 개운하게 시작하는 데 도움이 된다.\n다음 주에는 한 번 등산도 계획해보는 게 좋을 듯.\n주간 목표는 유산소 3회, 웨이트 2회였는데 이번 주는 잘 지킨 편이다.\n모레는 하체 위주 루틴 예정 — 스쿼트랑 런지를 중심으로 구성할 계획.\n꾸준히 기록하고 피드백하는 게 운동 지속에 확실히 효과가 있는 듯하다.",
    comments: [],
    exercises: [],
  };

  // navigation
  const navigation = useNavigation();

  // ref
  const feedOptionBottomSheetModalRef = useRef<BottomSheetModal>(null);
  const commentBottomSheetModalRef = useRef<BottomSheetModal>(null);
  const exerciseBottomSheetRef = useRef<BottomSheetModal>(null);

  // callbacks
  const { handlePresentModalPress } = useBottomSheetCallbacks();

  //render
  const renderRightHeader = () => (
    <View style={styles.rightHeader}>
      <Button>
        <Svg svgName="NewAlarm" />
      </Button>
      <Button onPress={() => handlePresentModalPress(feedOptionBottomSheetModalRef)}>
        <Svg svgName="More" />
      </Button>
    </View>
  );
  const renderFollowButton = () => (
    <Button style={styles.followButton}>
      <Typo style={styles.followTypo}>{Strings.FOLLOW}</Typo>
    </Button>
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: renderRightHeader,
    });
  });

  return (
    <SafeAreaScreenWrapper>
      <ScrollView contentContainerStyle={styles.feedView}>
        <Profile
          profileImage={feed.profileImage}
          author={feed.author}
          date={feed.date}
          rightComponent={() => (
            feed.followStatus === FollowStatus.NOT_FOLLOWING ?
              renderFollowButton() : null
          )}
        />
        <FeedImage images={feed.imageList} onPressMoreButton={() => handlePresentModalPress(exerciseBottomSheetRef)} />
        <FeedActions
          style={feed.imageList.length === 1 ? styles.feedActionsWithSingleImage : styles.feedActionsWithMultipleImage}
          likeCount={feed.likeCnt}
          commentCount={feed.commentCnt}
          onPressComment={() => {
            if (feed.commentCnt !== 0) {
              handlePresentModalPress(commentBottomSheetModalRef);
            }
          }}
        />
        <View style={styles.likeAndComment}>
          <FeedLike
            mainCommenterProfileImage={feed.mainCommenterProfileImage}
            mainCommenter={feed.mainCommenter}
            likeCount={feed.likeCnt}
          />
          <FeedContent
            nickname={feed.author}
            content={feed.content}
          />
          {feed.commentCnt === 0 ? null : (
            <>
              <Divider style={styles.divider} />
              <View style={styles.comment}>
                {
                  feed.comments.slice(0, 3).map((comment: Comment) => (
                    <FeedContent
                      nickname={comment.commenter}
                      content={comment.content}
                    />
                  ))
                }
              </View>
              <ViewAllCommentsButton onPress={() => handlePresentModalPress(commentBottomSheetModalRef)} />
            </>
          )}
        </View>
      </ScrollView>
      <FeedOptionBottomSheet
        bottomSheetRef={feedOptionBottomSheetModalRef}
        type={feed.followStatus} />
      <ExerciseBottomSheet
        bottomSheetRef={exerciseBottomSheetRef}
        exercises={feed.exercises} />
      <CommentBottomSheet
        commentRef={commentBottomSheetModalRef}
        profileImage={feed.profileImage}
        feedAuthor={feed.author}
        comments={feed.comments} />
    </SafeAreaScreenWrapper>
  );
};

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: colors.B_BASE_PRI,
  },
  rightHeader: {
    flexDirection: 'row',
    gap: 12,
  },
  feedView: {
    paddingTop: 20,
    paddingBottom: 33.26,
    paddingHorizontal: 11.5,
  },
  followButton: {
    flex: 0,
    width: 54,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  followTypo: {
    color: colors.PRI,
  },
  feedActionsWithSingleImage: {
    marginTop: 16,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  feedActionsWithMultipleImage: {
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  likeAndComment: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  divider: {
    marginTop: 4,
    marginBottom: 8,
  },
  comment: {
    flexDirection: 'column',
    gap: 4,
  },
});