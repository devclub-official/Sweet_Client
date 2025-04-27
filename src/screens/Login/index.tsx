import appleAuth from '@invertase/react-native-apple-authentication';
import {StatusBar, StyleSheet, View} from 'react-native';
import {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Svg} from '@/components/Svg';
import LinearGradient from 'react-native-linear-gradient';
import {SocialLoginButton} from './components/SocialLoginButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Login = () => {
  const insets = useSafeAreaInsets();
  const onAppleButtonPress = async () => {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      console.log('애플 로그인 성공!');
      console.log('appleAuthRequestResponse ==>', appleAuthRequestResponse);

      // identityToken을 서버에 보내서 본인 인증하면 완벽하게 안전!
    } catch (error) {
      console.error('애플 로그인 실패', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
    }, []),
  );

  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={['#66FBEF', '#66FBA5']}
        style={styles.gradient}
        start={{x: 0.0, y: 0.0}}
        end={{x: 1.0, y: 1.0}}>
        <View
          style={[styles.contentWrapper, {paddingBottom: 40 + insets.bottom}]}>
          <View style={styles.logoWrapper}>
            <Svg svgName="AppLogo" />
          </View>
          <View style={styles.buttonWrapper}>
            <SocialLoginButton
              onPress={() => {
                console.log('good ==> ');
              }}
              type="kakao"
            />
            <SocialLoginButton
              onPress={() => {
                console.log('good ==> ');
              }}
              type="naver"
            />
            <SocialLoginButton
              onPress={() => {
                console.log('good ==> ');
              }}
              type="apple"
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    paddingBottom: 40,
  },
  gradient: {
    flex: 1,
  },
  logoWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    gap: 16,
    paddingHorizontal: 20,
  },
});
