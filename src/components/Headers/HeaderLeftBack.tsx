import {RootStackParamList} from '@/types/navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native';
import {Svg} from '../Svg';

export const HeaderLeftBack = ({
  navigation,
}: {
  navigation: StackNavigationProp<RootStackParamList, string>;
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Svg svgName="ChevronLeft" />
    </TouchableOpacity>
  );
};
