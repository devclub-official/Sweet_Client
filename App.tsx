import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {RootStack} from '@/navigation/screens';
import './gesture-handler';

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
export default App;
