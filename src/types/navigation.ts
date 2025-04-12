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
  CreateFeed = 'CreateFeed',
}

interface HomeTabParam {
  [RootStackScreenList.Home]: undefined;
}
interface FeedTabParam {
  [RootStackScreenList.FeedList]: undefined;
  [RootStackScreenList.FeedDetail]: undefined;
  [RootStackScreenList.CreateFeed]: undefined;
}
interface MyPageTabParam {
  [RootStackScreenList.MyPage]: undefined;
}
interface MainTabParam {
  [RootStackScreenList.HomeTab]: NavigatorScreenParams<HomeTabParam>;
  [RootStackScreenList.FeedTab]: NavigatorScreenParams<FeedTabParam>;
  [RootStackScreenList.MyPageTab]: NavigatorScreenParams<MyPageTabParam>;
}
export interface RootStackParamList extends ParamListBase {
  [RootStackScreenList.MainTab]: NavigatorScreenParams<MainTabParam>;
  [RootStackScreenList.Login]: undefined;
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
