import appleAuth from '@invertase/react-native-apple-authentication';
import {StatusBar, StyleSheet, View} from 'react-native';
import {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Svg} from '@/components/Svg';
import LinearGradient from 'react-native-linear-gradient';
import {SocialLoginButton} from './components/SocialLoginButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Typo} from '@/components/Typo';
import NaverLogin from '@react-native-seoul/naver-login';
import {Button} from '@/components/Button';
import Config from 'react-native-config';
import {KakaoOAuthToken, login} from '@react-native-seoul/kakao-login';

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

  console.log('good ==>');
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
            <Typo font="Dossaem03" color="B_BASE_PRI">
              운동이 즐거워 지는 곳
            </Typo>
            <Svg svgName="AppLogo" />
          </View>
          <View style={styles.buttonWrapper}>
            <SocialLoginButton
              onPress={async () => {
                try {
                  const token: KakaoOAuthToken = await login();
                  console.log('good token ==> ', token);
                } catch (e) {
                  console.log('error ==>', e);
                }
              }}
              type="kakao"
            />
            <Button
              onPress={() => {
                NaverLogin.initialize({
                  appName: Config.PTPT_APP_NAME || '',
                  consumerKey: Config.NAVER_CLIENT_ID || '',
                  consumerSecret: Config.NAVER_CLIENT_SECRET || '',
                  serviceUrlSchemeIOS: 'com.sweet.ptpt',
                  disableNaverAppAuthIOS: true,
                });
              }}>
              초기화
            </Button>
            <SocialLoginButton
              onPress={async () => {
                console.log('good ==> ');
                try {
                  console.log('hi ==>');
                  const res = await NaverLogin.login();
                  console.log('res ==> ', res);
                } catch (e) {
                  console.log('e ==> ', e);
                }
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
    gap: 12,
  },
  buttonWrapper: {
    gap: 16,
    paddingHorizontal: 20,
  },
});
