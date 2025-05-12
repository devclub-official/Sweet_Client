import {View} from 'react-native';
import {Button} from '@/components/Button';
import {useSweetNavigation} from '@/hooks/useNavigation';
import {RootStackScreenList, RouteParams} from '@/types/navigation';
import {useNavigation, useRoute} from '@react-navigation/native';
import {tokenStorage} from '@/utils/tokenStorage';

export const Home = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteParams<RootStackScreenList.Home>>();
  const {push} = useSweetNavigation();

  return (
    <View>
      <Button
        size="medium"
        onPress={() => {
          push(RootStackScreenList.MainTab, {
            screen: RootStackScreenList.FeedTab,
            params: {screen: RootStackScreenList.FeedDetail, params: {id: '1'}},
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
          tokenStorage.clearTokens();
        }}>
        로그아웃
      </Button>
    </View>
  );
};
