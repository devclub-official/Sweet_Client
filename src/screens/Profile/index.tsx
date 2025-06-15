import { ProfileContainer } from '@/components/Profile/ProfileContainer';
import { SafeAreaScreenWrapper } from '@/components/SafeAreaScreenWrapper';
import { AppStatusBar } from '@/components/StatusBar';
import { colors } from '@/theme/colors';
import { RootStackScreenList, RouteParams } from '@/types/navigation';

interface ProfileProps {
    route: RouteParams<RootStackScreenList.Profile>
}

export const Profile = ({ route }: ProfileProps) => {
    return (
        <SafeAreaScreenWrapper>
            <AppStatusBar backgroundColor={colors.B_BASE_PRI} />

            {
                route.params ? (
                    <ProfileContainer userId={route.params.userId} isMyPage={false} />
                ) : null
            }
        </SafeAreaScreenWrapper>
    );
};
