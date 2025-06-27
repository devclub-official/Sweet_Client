import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {AuthStack, RootStack} from '@/navigation/screens';
import {colors} from '@/theme/colors';
import BootSplash from 'react-native-bootsplash';
import './gesture-handler';
import {tokenStorage} from '@/utils/tokenStorage';
import {SweetError} from '@/apis/error';
import {useUserStore} from '@/stores/useAuthStore';
import {getMe} from '@/apis/auth';
import {PaperProvider} from 'react-native-paper';
import {navigation} from '@/utils/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {StyleSheet} from 'react-native';

const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.B_BASE_PRI,
  },
};

const navigationRef = navigation.getNavigationRef();

const App = () => {
  const [checkLogin, setCheckLogin] = useState(false);
  const {isLogined, setLoginUser} = useUserStore();

  useEffect(() => {
    const appStart = async () => {
      try {
        const token = await tokenStorage.getTokens();
        if (token) {
          const me = await getMe();
          setLoginUser(me);
        }
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
    <GestureHandlerRootView style={styles.gestureHandler}>
      <BottomSheetModalProvider>
        <PaperProvider>
          <NavigationContainer theme={defaultTheme} ref={navigationRef}>
            {isLogined ? <RootStack /> : <AuthStack />}
          </NavigationContainer>
        </PaperProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};
export default App;

const styles = StyleSheet.create({
  gestureHandler: {
    flex: 1,
  },
});
