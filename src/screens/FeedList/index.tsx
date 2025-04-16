import {Typo} from '@/components/Typo';
import { FONTS } from '@/theme/fonts';
import {View} from 'react-native';

export const FeedList = () => {
  return (
    <View>
      <Typo font={FONTS.HeadLargeB} style={{color: "white"}}>feed list</Typo>
    </View>
  );
};
