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
  GroupTab = 'GroupTab',
  MyPageTab = 'MyPageTab',

  Home = 'Home',
  Login = 'Login',
  FeedList = 'FeedList',
  FeedDetail = 'FeedDetail',
  MyPage = 'MyPage',
  CreateFeed = 'CreateFeed',
  Onboarding = 'Onboarding',
  Setting = 'Setting',
  EditProfile = 'EditProfile',
  TermsOfService = 'TermsOfService',
  Withdraw = 'Withdraw',
  Profile = 'Profile',
  Group = 'Group',

  WithdrawReason = 'WithdrawReason',
  WithdrawWarning = 'WithdrawWarning',
  WithdrawComplete = 'WithdrawComplete',
}

interface WithdrawScreenParam {
  [RootStackScreenList.WithdrawReason]: undefined;
  [RootStackScreenList.WithdrawWarning]: undefined;
  [RootStackScreenList.WithdrawComplete]: undefined;
}
interface HomeTabParam {
  [RootStackScreenList.Home]: undefined;
}
interface FeedTabParam {
  [RootStackScreenList.FeedList]: undefined;
  [RootStackScreenList.CreateFeed]: undefined;
  [RootStackScreenList.FeedDetail]: {
    id: string;
  };
  [RootStackScreenList.Profile]: {
    userId: number;
  };
}
interface GroupTabParam {
  [RootStackScreenList.Group]: undefined;
}
interface MyPageTabParam {
  [RootStackScreenList.MyPage]: undefined;
  [RootStackScreenList.Setting]: undefined;
  [RootStackScreenList.EditProfile]: undefined;
  [RootStackScreenList.TermsOfService]: undefined;
  [RootStackScreenList.Withdraw]: NavigatorScreenParams<WithdrawScreenParam>;
}
export interface MainTabParam {
  [RootStackScreenList.HomeTab]: NavigatorScreenParams<HomeTabParam>;
  [RootStackScreenList.FeedTab]: NavigatorScreenParams<FeedTabParam>;
  [RootStackScreenList.GroupTab]: NavigatorScreenParams<GroupTabParam>;
  [RootStackScreenList.MyPageTab]: NavigatorScreenParams<MyPageTabParam>;
}
export interface RootStackParamList extends ParamListBase {
  [RootStackScreenList.MainTab]: NavigatorScreenParams<MainTabParam>;
  [RootStackScreenList.Login]: undefined;
  [RootStackScreenList.Onboarding]: undefined;
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
