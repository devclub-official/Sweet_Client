import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  ParamListBase,
  StaticScreenProps,
} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

export const enum RootStackScreenList {
  Home = 'Home',
  Login = 'Login',
}
export interface RootStackParamList extends ParamListBase {
  [RootStackScreenList.Home]: undefined;
  [RootStackScreenList.Login]: {id: number};
}
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type HomeTabParamList = {
  Popular: undefined;
  Latest: undefined;
};

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;
export type ScreenProps<T extends RootStackScreenList> = StaticScreenProps<
  RootStackParamList[T]
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
