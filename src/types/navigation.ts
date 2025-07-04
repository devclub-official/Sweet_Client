import {
  NavigatorScreenParams,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
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
  Onboarding = 'Onboarding',
  Setting = 'Setting',
  EditProfile = 'EditProfile',
  TermsOfService = 'TermsOfService',
  Withdraw = 'Withdraw',
  Profile = 'Profile',

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
  [RootStackScreenList.MyPageTab]: NavigatorScreenParams<MyPageTabParam>;
}
export interface RootStackParamList extends ParamListBase {
  [RootStackScreenList.MainTab]: NavigatorScreenParams<MainTabParam>;
  [RootStackScreenList.Login]: undefined;
  [RootStackScreenList.Onboarding]: {
    tempToken: string;
    image?: string;
    nickName?: string;
  };
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
export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
