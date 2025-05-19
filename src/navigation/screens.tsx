import {BottomTabBar} from '@/components/BottomTabBar';
import {HeaderLeftBack} from '@/components/Headers/HeaderLeftBack';
import {screenTitle} from '@/constants/screen';
import {FeedDetail} from '@/screens/FeedDetail';
import {FeedList} from '@/screens/FeedList';
import {useFeedListHeader} from '@/screens/FeedList/hooks/useFeedListHeader';
import {Home} from '@/screens/Home';
import {Login} from '@/screens/Login';
import {MyPage} from '@/screens/MyPage';
import {Onboard} from '@/screens/Onboard';
import {colors} from '@/theme/colors';
import {RootStackParamList, RootStackScreenList} from '@/types/navigation';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={RootStackScreenList.Home} component={Home} />
    </Stack.Navigator>
  );
};

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
    // FIXME: 밑 임시 스타일 수정
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: '700',
    },
    headerRightContainerStyle: {paddingRight: 20},
    headerLeftContainerStyle: {
      paddingLeft: 20,
    },
  };
};

const FeedTab = () => {
  const {renderHeaderTitle, renderHeaderRight} = useFeedListHeader();

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
          headerRight: () => renderHeaderRight(props.navigation),
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
    </Stack.Navigator>
  );
};
const MyPageTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={RootStackScreenList.MyPage} component={MyPage} />
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

export const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName={RootStackScreenList.MainTab}>
      <Stack.Screen
        name={RootStackScreenList.MainTab}
        component={TabScreen}
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
        options={prop => ({
          ...getDefaultHeaderOptions(prop),
          headerShown: false,
        })}
      />
      <Stack.Screen
        name={RootStackScreenList.Onboard}
        component={Onboard}
        options={prop => ({...getDefaultHeaderOptions(prop), title: ''})}
      />
    </Stack.Navigator>
  );
};
