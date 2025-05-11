import {StatusBar, StyleSheet, View} from 'react-native';
import {useCallback, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Svg} from '@/components/Svg';
import LinearGradient from 'react-native-linear-gradient';
import {SocialLoginButton} from './components/SocialLoginButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Typo} from '@/components/Typo';
import {useSocialLogin} from '@/hooks/useSocialLogin';
import {deviceInfo} from '@/utils/device';

export const Login = () => {
  const insets = useSafeAreaInsets();
  const {kakaoLogin, naverLogin, appleLogin, socialLoginInitalize} =
    useSocialLogin();

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
    }, []),
  );

  useEffect(() => {
    socialLoginInitalize();
  }, [socialLoginInitalize]);

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
            <SocialLoginButton onPress={kakaoLogin} type="kakao" />
            <SocialLoginButton onPress={naverLogin} type="naver" />
            {deviceInfo.checkIOS() && (
              <SocialLoginButton onPress={appleLogin} type="apple" />
            )}
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
