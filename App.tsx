import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {RootStack} from '@/navigation/screens';
import {colors} from '@/theme/colors';
import BootSplash from 'react-native-bootsplash';
import './gesture-handler';

const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.B_BASE_PRI,
  },
};

const App = () => {
  useEffect(() => {
    BootSplash.hide({fade: true});
  }, []);

  return (
    <NavigationContainer theme={defaultTheme}>
      <RootStack />
    </NavigationContainer>
  );
};
export default App;
