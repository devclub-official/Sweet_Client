import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {AuthStack, RootStack} from '@/navigation/screens';
import {colors} from '@/theme/colors';
import BootSplash from 'react-native-bootsplash';
import './gesture-handler';
import {tokenStorage} from '@/utils/tokenStorage';
import {getMe} from '@/apis/profile';
import {SweetError} from '@/apis/error';

const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.B_BASE_PRI,
  },
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const appStart = async () => {
      try {
        const token = await tokenStorage.getTokens();
        if (token) {
          // TODO: me api 정상화되면 다시 호출
          // const me = await getMe();
          // console.log('me ==>', me);
          setIsLoggedIn(true);
        } else {
          console.log('로그인 안됨 ==> ');
          setIsLoggedIn(false);
        }
      } catch (e) {
        if (e instanceof SweetError) {
          console.log(e.errorMessage);
        }
      } finally {
        BootSplash.hide({fade: true});
      }
    };

    appStart();
  }, []);

  if (isLoggedIn === null) {
    return null;
  }
  return (
    <NavigationContainer theme={defaultTheme}>
      {isLoggedIn ? <RootStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default App;
