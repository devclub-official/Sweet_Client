import {FeedDetail} from '@/screens/FeedDetail';
import {FeedList} from '@/screens/FeedList';
import {Home} from '@/screens/Home';
import {Login} from '@/screens/Login';
import {MyPage} from '@/screens/MyPage';
import {RootStackParamList, RootStackScreenList} from '@/types/navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={RootStackScreenList.Home} component={Home} />
    </Stack.Navigator>
  );
};
const FeedTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={RootStackScreenList.FeedList} component={FeedList} />
      <Stack.Screen
        name={RootStackScreenList.FeedDetail}
        component={FeedDetail}
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
const TabScreen = () => {
  return (
    <Tab.Navigator>
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
  );
};

export const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="tab">
      <Stack.Screen
        name="tab"
        component={TabScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name={RootStackScreenList.Login} component={Login} />
    </Stack.Navigator>
  );
};
