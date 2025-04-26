import {View} from 'react-native';
import {Button} from '@/components/Button';
import {Typo} from '@/components/Typo';
import {useSweetNavigation} from '@/hooks/useNavigation';
import {useAuthStore} from '@/stores/useAuthStore';
import {RootStackScreenList, RouteParams} from '@/types/navigation';
import {useNavigation, useRoute} from '@react-navigation/native';
import {appleAuth} from '@invertase/react-native-apple-authentication';

export const Home = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteParams<RootStackScreenList.Home>>();
  const {push} = useSweetNavigation();

  const {setAccessToken, accessToken} = useAuthStore();

  const onAppleButtonPress = async () => {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      console.log('애플 로그인 성공!');
      console.log('appleAuthRequestResponse ==>', appleAuthRequestResponse);

      // identityToken을 서버에 보내서 본인 인증하면 완벽하게 안전!
    } catch (error) {
      console.error('애플 로그인 실패', error);
    }
  };

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
      <Button
        size="small"
        onPress={() => {
          onAppleButtonPress();
        }}>
        소셜 로그인 애플
      </Button>

      <Typo>{accessToken}</Typo>
    </View>
  );
};
