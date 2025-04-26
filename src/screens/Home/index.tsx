import {testF} from '@/apis/auth';
import {api} from '@/apis/common';
import {Button} from '@/components/Button';
import {Typo} from '@/components/Typo';
import {useSweetNavigation} from '@/hooks/useNavigation';
import {useAuthStore} from '@/stores/useAuthStore';
import {RootStackScreenList, RouteParams} from '@/types/navigation';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View} from 'react-native';

export const Home = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteParams<RootStackScreenList.Home>>();
  const {push} = useSweetNavigation();

  const {setAccessToken, accessToken} = useAuthStore();

  return (
    <View>
      <Button
        onPress={() => {
          setAccessToken('안녕하세요?');
        }}>
        로그인 토큰 테스트
      </Button>
      <Button
        size="medium"
        onPress={() => {
          push(RootStackScreenList.MainTab, {
            screen: RootStackScreenList.FeedTab,
            params: {screen: RootStackScreenList.FeedDetail},
          });
        }}>
        탭 화면 이동
      </Button>
      <Button
        size="small"
        onPress={() => {
          push(RootStackScreenList.Onboard);
        }}>
        스택 화면 이동
      </Button>

      <Typo>{accessToken}</Typo>
    </View>
  );
};
