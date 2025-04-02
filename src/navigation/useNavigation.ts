import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '@/types/navigation';

export const useSweetNavigation = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const push: typeof navigation.navigate = (...params: any) => {
    return navigation.navigate(params);
  };

  return {push};
};
