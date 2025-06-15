import {ProfileInfo} from '@/models/domain/Profile/ProfileInfo';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {Button} from '../Button';
import {ProfileType} from '@/models/domain/Profile/ProfileType';
import {strings as stringsInProfile} from './constants/strings';
import {strings} from '@/constants/strings';
import {Typo} from '../Typo';
import {StatItem} from './StatItem';
import {colors} from '@/theme/colors';
import {FeedInProfile} from '@/models/domain/Profile/FeedInProfile';
import {Dumbbell} from '@/assets/svgs/Dumbbell';
import {useSweetNavigation} from '@/hooks/useNavigation';
import {RootStackParamList, RootStackScreenList} from '@/types/navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Svg} from '../Svg';
import { useProfile } from './hooks/useProfile';

interface ProfileContainerProps {
  userId?: number;
  isMyPage: boolean;
}

const renderButtonByProfileType = (
  type: ProfileType,
  navigation: NativeStackNavigationProp<RootStackParamList>['navigate'],
) => {
  switch (type) {
    case 'SELF':
      return (
        <Button
          type="black"
          size="medium"
          fill={false}
          onPress={() => navigation(RootStackScreenList.EditProfile)}>
          {stringsInProfile.UPDATE_PROFILE}
        </Button>
      );
    case 'FOLLOWING':
      return (
        <Button type="black" size="medium" fill={false}>
          {strings.FOLLOWING}
        </Button>
      );
    case 'NOT_FOLLOWING':
      return (
        <Button type="primary" size="medium" fill={false}>
          {strings.FOLLOW}
        </Button>
      );
  }
};

const renderFeedItem = ({item}: {item: FeedInProfile}) => (
  <Image
    style={styles.feedItemImage}
    source={{
      uri: item.feedThumbnail,
    }}
  />
);

export const ProfileContainer = ({userId, isMyPage}: ProfileContainerProps) => {
  const navigation = useSweetNavigation();
  const { profileInfo } = useProfile(userId, isMyPage);

  return (
    <FlatList
      data={profileInfo.feeds}
      renderItem={renderFeedItem}
      keyExtractor={item => item.feedId.toString()}
      numColumns={3}
      ListHeaderComponent={
        <>
          <View style={styles.profileContainer}>
            <View style={styles.profileImageAndStatsContainer}>
              <Image
                style={styles.profileImage}
                source={{
                  uri: profileInfo.profileImage,
                }}
              />
              <View style={styles.statsContainer}>
                <StatItem stat={profileInfo.feedCount} statName={strings.FEED} />
                <StatItem
                  stat={profileInfo.followerCount}
                  statName={strings.FOLLOWER}
                />
                <StatItem
                  stat={profileInfo.followingCount}
                  statName={strings.FOLLOWING}
                />
              </View>
            </View>
            <Typo color="CG1" font="SubSmallM">
              {profileInfo.nickname}
            </Typo>
            <Typo color="CG1" font="CaptionR" style={styles.introduceTypo}>
              {profileInfo.introduce}
            </Typo>

            {renderButtonByProfileType(profileInfo.type, navigation.push)}
          </View>
          <View style={styles.workoutSummaryContainer}>
            <View style={styles.workoutSummaryTypoContainer}>
              {profileInfo.isOnWorkoutStreak ? (
                <Svg svgName="Fire" />
              ) : (
                <Svg
                  svgName="Calendar"
                  options={{width: '14', height: '14', color: colors.SUB}}
                />
              )}
              <Typo color="CG10" font="Pre03M">
                {profileInfo.workoutStatusMessage}
              </Typo>
            </View>
            <View style={styles.workoutSummaryTypoContainer}>
              <Dumbbell
                width="14"
                height="14"
                color={colors.B_50}
                fill={colors.B_50}
              />
              <Typo color="CG10" font="Pre03M">
                {profileInfo.favoriteWorkout}
              </Typo>
            </View>
          </View>
        </>
      }
    />
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    paddingHorizontal: 20,
  },
  profileImageAndStatsContainer: {
    marginBottom: 8,
    flexDirection: 'row',
    gap: 30,
  },
  profileImage: {
    width: 96,
    height: 96,
    borderRadius: 100,
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  introduceTypo: {
    marginBottom: 20,
  },
  workoutSummaryContainer: {
    marginTop: 16,
    gap: 8,
    backgroundColor: colors.B_700,
    padding: 10,
  },
  workoutSummaryTypoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  feedItemImage: {
    margin: 1,
    width: '33.3%',
    aspectRatio: 1,
  },
});
