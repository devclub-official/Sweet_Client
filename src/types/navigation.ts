import {
  NavigatorScreenParams,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

export const enum RootStackScreenList {
  MainTab = 'MainTab',
  HomeTab = 'HomeTab',
  FeedTab = 'FeedTab',
  MyPageTab = 'MyPageTab',

  Home = 'Home',
  Login = 'Login',
  FeedList = 'FeedList',
  FeedDetail = 'FeedDetail',
  MyPage = 'MyPage',
  Onboard = 'Onboard',
  Setting = 'Setting',
  EditProfile = 'EditProfile',
}

interface HomeTabParam {
  [RootStackScreenList.Home]: undefined;
}
interface FeedTabParam {
  [RootStackScreenList.FeedList]: undefined;
  [RootStackScreenList.FeedDetail]: {
    id: string;
  };
}
interface MyPageTabParam {
  [RootStackScreenList.MyPage]: undefined;
  [RootStackScreenList.Setting]: undefined;
  [RootStackScreenList.EditProfile]: undefined;
}
export interface MainTabParam {
  [RootStackScreenList.HomeTab]: NavigatorScreenParams<HomeTabParam>;
  [RootStackScreenList.FeedTab]: NavigatorScreenParams<FeedTabParam>;
  [RootStackScreenList.MyPageTab]: NavigatorScreenParams<MyPageTabParam>;
}
export interface RootStackParamList extends ParamListBase {
  [RootStackScreenList.MainTab]: NavigatorScreenParams<MainTabParam>;
  [RootStackScreenList.Login]: undefined;
  [RootStackScreenList.Onboard]: undefined;
}
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type HomeTabParamList = {
  Popular: undefined;
  Latest: undefined;
};

export type RouteParams<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
