import {BottomTabBar} from '@/components/BottomTabBar';
import {HeaderLeftBack} from '@/components/Headers/HeaderLeftBack';
import {HomeHeaderRight} from '@/components/Headers/HomeHeaderRight';
import {screenTitle} from '@/constants/screen';
import {EditProfile} from '@/screens/EditProfile';
import {CreateFeed} from '@/screens/CreateFeed';
import {FeedDetail} from '@/screens/FeedDetail';
import {FeedList} from '@/screens/FeedList';
import {useFeedListHeader} from '@/screens/FeedList/hooks/useFeedListHeader';
import {Home} from '@/screens/Home';
import {Login} from '@/screens/Login';
import {MyPage} from '@/screens/MyPage';
import {Onboard} from '@/screens/Onboard';
import {useMyPage} from '@/screens/MyPage/hooks/useMyPageCallbacks';
import {Setting} from '@/screens/Setting';
import {TermsOfService} from '@/screens/TermsOfService';
import {colors} from '@/theme/colors';
import {RootStackParamList, RootStackScreenList} from '@/types/navigation';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import {WithdrawComplete} from '@/screens/Withdraw/WithdrawComplete';
import {WithdrawReason} from '@/screens/Withdraw/WithdrawReason';
import {WithdrawWarning} from '@/screens/Withdraw/WithdrawWarning';
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { Profile } from '@/screens/Profile';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const getDefaultHeaderOptions = ({
  navigation,
}: {
  route: RouteProp<RootStackParamList>;
  navigation: StackNavigationProp<RootStackParamList, string>;
  theme: ReactNavigation.Theme;
}): StackNavigationOptions => {
  return {
    headerLeft: () => <HeaderLeftBack navigation={navigation} />,
    headerStyle: {
      backgroundColor: colors.B_BASE_PRI,
    },
    headerTintColor: colors.WHITE,
    headerTitleStyle: {
      fontWeight: '700',
    },
    headerRightContainerStyle: {paddingRight: 20},
    headerLeftContainerStyle: {
      paddingLeft: 20,
    },
  };
};

const HomeTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RootStackScreenList.Home}
        component={Home}
        options={props => {
          return {
            ...getDefaultHeaderOptions(props),
            headerLeft: undefined,
            title: '',
            headerRight: HomeHeaderRight,
          };
        }}
      />
    </Stack.Navigator>
  );
};

const FeedTab = () => {
  const {renderHeaderTitle, renderFeedListHeaderRight, renderProfileHeaderRight} = useFeedListHeader();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RootStackScreenList.FeedList}
        component={FeedList}
        options={props => ({
          ...getDefaultHeaderOptions(props),
          headerLeft: undefined,
          headerTitleAlign: 'center',
          headerTitle: renderHeaderTitle,
          headerRight: () => renderFeedListHeaderRight(props.navigation),
        })}
      />
      <Stack.Screen
        name={RootStackScreenList.FeedDetail}
        component={FeedDetail}
        options={props => ({
          ...getDefaultHeaderOptions(props),
          headerTitle: screenTitle.FeedDetail,
        })}
      />
      <Stack.Screen
        name={RootStackScreenList.CreateFeed}
        component={CreateFeed}
        options={props => {
          return {
            ...getDefaultHeaderOptions(props),
            title: screenTitle[RootStackScreenList.CreateFeed],
          };
        }}
      />
      <Stack.Screen
        name={RootStackScreenList.Profile}
        component={Profile}
        options={props => ({
          ...getDefaultHeaderOptions(props),
          headerTitle: '',
          headerRight: renderProfileHeaderRight,
        })}
      />
    </Stack.Navigator>
  );
};
const MyPageTab = () => {
  const {renderHeaderRight} = useMyPage();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RootStackScreenList.MyPage}
        component={MyPage}
        options={props => ({
          ...getDefaultHeaderOptions(props),
          headerTitle: '',
          headerRight: () => renderHeaderRight(),
        })}
      />
      <Stack.Screen
        name={RootStackScreenList.Setting}
        component={Setting}
        options={props => ({
          ...getDefaultHeaderOptions(props),
          headerTitle: screenTitle.Setting,
          headerTitleAlign: 'center',
        })}
      />
      <Stack.Screen
        name={RootStackScreenList.EditProfile}
        component={EditProfile}
        options={props => ({
          ...getDefaultHeaderOptions(props),
          headerTitle: screenTitle.EditProfile,
          headerTitleAlign: 'center',
        })}
      />
      <Stack.Screen
        name={RootStackScreenList.TermsOfService}
        component={TermsOfService}
        options={props => ({
          ...getDefaultHeaderOptions(props),
          headerTitle: screenTitle.TermsOfService,
          headerTitleAlign: 'center',
        })}
      />
    </Stack.Navigator>
  );
};

const renderBottomTabBar = (props: BottomTabBarProps) => {
  return <BottomTabBar bottomTabBarProps={props} />;
};
const TabScreen = () => {
  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <Tab.Navigator tabBar={renderBottomTabBar}>
          <Tab.Screen
            name={RootStackScreenList.HomeTab}
            component={HomeTab}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name={RootStackScreenList.FeedTab}
            component={FeedTab}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name={RootStackScreenList.MyPageTab}
            component={MyPageTab}
            options={{headerShown: false}}
          />
        </Tab.Navigator>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const WithdrawStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={RootStackScreenList.WithdrawReason}
      screenOptions={props => ({
        ...getDefaultHeaderOptions(props),
        headerTitle: screenTitle.Withdraw,
        headerTitleAlign: 'center',
      })}>
      <Stack.Screen
        name={RootStackScreenList.WithdrawReason}
        component={WithdrawReason}
      />
      <Stack.Screen
        name={RootStackScreenList.WithdrawWarning}
        component={WithdrawWarning}
      />
      <Stack.Screen
        name={RootStackScreenList.WithdrawComplete}
        component={WithdrawComplete}
      />
    </Stack.Navigator>
  );
};

export const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName={RootStackScreenList.MainTab}>
      <Stack.Screen
        name={RootStackScreenList.MainTab}
        component={TabScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={RootStackScreenList.Withdraw}
        component={WithdrawStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={RootStackScreenList.Login}>
      <Stack.Screen
        name={RootStackScreenList.Login}
        component={Login}
        options={props => ({
          ...getDefaultHeaderOptions(props),
          headerShown: false,
        })}
      />
      <Stack.Screen
        name={RootStackScreenList.Onboard}
        component={Onboard}
        options={props => ({...getDefaultHeaderOptions(props), title: ''})}
      />
    </Stack.Navigator>
  );
};
