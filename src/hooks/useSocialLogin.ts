import {signIn} from '@/apis/auth';
import {SweetError} from '@/apis/error';
import {getMe} from '@/apis/profile';
import {useUserStore} from '@/stores/useAuthStore';
import {tokenStorage} from '@/utils/tokenStorage';
import appleAuth from '@invertase/react-native-apple-authentication';
import {
  KakaoOAuthToken,
  login as KakaoLogin,
} from '@react-native-seoul/kakao-login';
import NaverLogin from '@react-native-seoul/naver-login';
import {useCallback} from 'react';
import Config from 'react-native-config';

export const useSocialLogin = () => {
  const {setLoginUser} = useUserStore();
  const socialLoginInitalize = useCallback(() => {
    // TODO: initialized 된 항목들 state로 관리해서 여러번 하지 않도록.
    NaverLogin.initialize({
      appName: Config.PTPT_APP_NAME || '',
      consumerKey: Config.NAVER_CLIENT_ID || '',
      consumerSecret: Config.NAVER_CLIENT_SECRET || '',
      serviceUrlSchemeIOS: 'com.sweet.ptpt',
      disableNaverAppAuthIOS: true,
    });
  }, []);
  const login = useCallback(
    async (_: any) => {
      //TODO: login api 호출 후 온 토큰값으로
      try {
        const {
          data: {accessToken, refreshToken},
        } = await signIn({
          email: 'xodml9598@naver.com',
          password: '1234',
        });
        console.log('data ==>', accessToken, refreshToken);
        await tokenStorage.setTokens({
          accessToken,
          refreshToken,
        });
        const me = await getMe();
        setLoginUser(me);
      } catch (e) {
        if (e instanceof SweetError) {
          console.log('e ==> ', e.errorMessage);
        }
      }
    },
    [setLoginUser],
  );

  const kakaoLogin = useCallback(async () => {
    try {
      const token: KakaoOAuthToken = await KakaoLogin();
      login(token);
    } catch (e) {
      console.log('error ==>', e);
    }
  }, [login]);
  const naverLogin = useCallback(async () => {
    try {
      const res = await NaverLogin.login();
      login(res);
    } catch (e) {
      console.log('e ==> ', e);
    }
  }, [login]);
  const appleLogin = useCallback(async () => {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      login(appleAuthRequestResponse);
      // identityToken을 서버에 보내서 본인 인증하면 완벽하게 안전!
    } catch (error) {
      console.error('애플 로그인 실패', error);
    }
  }, [login]);

  return {kakaoLogin, naverLogin, appleLogin, socialLoginInitalize};
};
