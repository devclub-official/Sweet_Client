import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '@/types/navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Navigation = NativeStackNavigationProp<RootStackParamList>;

export const useSweetNavigation = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const push: Navigation['navigate'] = (...args) => {
    navigation.navigate(...(args as any));
  };
  const pop: Navigation['goBack'] = () => {
    navigation.goBack();
  };
  const reset: Navigation['reset'] = state => {
    navigation.reset(state);
  };

  return {push, pop, reset};
};
