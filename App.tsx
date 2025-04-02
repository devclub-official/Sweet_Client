import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '@/screens/Home';
import './gesture-handler';
import {RootStackParamList} from '@/types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
