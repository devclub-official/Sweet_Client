import { ProfileContainer } from '@/components/Profile/ProfileContainer';
import { SafeAreaScreenWrapper } from '@/components/SafeAreaScreenWrapper';
import { AppStatusBar } from '@/components/StatusBar';
import { colors } from '@/theme/colors';

export const MyPage = () => {
  return (
    <SafeAreaScreenWrapper>
      <AppStatusBar backgroundColor={colors.B_BASE_PRI} />

      <ProfileContainer isMyPage={true} />
    </SafeAreaScreenWrapper>
  );
};
