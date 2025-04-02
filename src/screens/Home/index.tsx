import {Button} from '@/components/Button';
import {Typo} from '@/components/Typo';
import {useAuthStore} from '@/stores/useAuthStore';
import {View} from 'react-native';

export const Home = () => {
  const {setAccessToken, accessToken} = useAuthStore();

  return (
    <View>
      <Button
        onPress={() => {
          setAccessToken('안녕하세요?');
        }}>
        <Typo>gd</Typo>
      </Button>
      <Typo>{accessToken}</Typo>
    </View>
  );
};
