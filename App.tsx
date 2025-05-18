import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {AuthStack, RootStack} from '@/navigation/screens';
import {colors} from '@/theme/colors';
import BootSplash from 'react-native-bootsplash';
import './gesture-handler';
import {tokenStorage} from '@/utils/tokenStorage';
import {getMe} from '@/apis/profile';
import {SweetError} from '@/apis/error';
import {useUserStore} from '@/stores/useAuthStore';

const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.B_BASE_PRI,
  },
};

const App = () => {
  const [checkLogin, setCheckLogin] = useState(false);
  const {isLogined, setLoginUser} = useUserStore();

  useEffect(() => {
    const appStart = async () => {
      try {
        // await tokenStorage.clearTokens();
        // const token = await tokenStorage.getTokens();
        // if (token) {
        //   const me = await getMe();
        //   setLoginUser(me);
        // } else {
        // }
        setCheckLogin(true);
      } catch (e) {
        if (e instanceof SweetError) {
          console.log(e.errorMessage);
        }
      } finally {
        BootSplash.hide({fade: true});
      }
    };

    appStart();
  }, [setLoginUser]);

  if (!checkLogin) {
    return null;
  }
  return (
    <NavigationContainer theme={defaultTheme}>
      {isLogined ? <RootStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default App;
