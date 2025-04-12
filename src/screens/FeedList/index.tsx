import {Button} from '@/components/Button';
import {Typo} from '@/components/Typo';
import {useSweetNavigation} from '@/hooks/useNavigation';
import {RootStackScreenList} from '@/types/navigation';
import {View} from 'react-native';

export const FeedList = () => {
  const {push} = useSweetNavigation();
  return (
    <View>
      <Button
        onPress={() => {
          push(RootStackScreenList.CreateFeed);
        }}>
        <Typo>작성</Typo>
      </Button>
      <Typo>feed list</Typo>
    </View>
  );
};
