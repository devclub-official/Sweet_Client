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
        <Typo>로그인 토큰 테스트</Typo>
      </Button>
      <Button
        onPress={() => {
          push(RootStackScreenList.MainTab, {
            screen: RootStackScreenList.FeedTab,
            params: {screen: RootStackScreenList.FeedDetail},
          });
        }}>
        <Typo>탭 화면 이동</Typo>
      </Button>
      <Button
        onPress={() => {
          push(RootStackScreenList.Login);
        }}>
        <Typo>스택 화면 이동</Typo>
      </Button>
      <Typo>{accessToken}</Typo>
    </View>
  );
};
