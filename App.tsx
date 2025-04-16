import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {RootStack} from '@/navigation/screens';
import './gesture-handler';
import {colors} from '@/theme/colors';

const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.B_BASE_PRI,
  },
};

const App = () => {
  return (
    <NavigationContainer theme={defaultTheme}>
      <RootStack />
    </NavigationContainer>
  );
};
export default App;
