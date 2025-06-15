import {getMe, socialLogin} from '@/apis/auth';
import {SweetError} from '@/apis/error';
import {useUserStore} from '@/stores/useAuthStore';
import {ResponseCode, SweetResponse} from '@/types/network';
import {tokenStorage} from '@/utils/tokenStorage';
import appleAuth from '@invertase/react-native-apple-authentication';
import {
  KakaoOAuthToken,
  login as KakaoLogin,
} from '@react-native-seoul/kakao-login';
import NaverLogin from '@react-native-seoul/naver-login';
import {useCallback} from 'react';
import Config from 'react-native-config';
import {useSweetNavigation} from './useNavigation';
import {RootStackScreenList} from '@/types/navigation';
import {
  SignInRequiredOnboardingResponseDto,
  SignInResponseDto,
  SocialLoginProvider,
} from '@/models/dto/Auth/SignInDto';

export const useSocialLogin = () => {
  const {setLoginUser} = useUserStore();
  const {push} = useSweetNavigation();
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
    async (provider: SocialLoginProvider, accessToken: string) => {
      try {
        const response = await socialLogin({
          provider,
          accessToken,
        });
        if (response.code === ResponseCode.S0112) {
          const tempUserData =
            response.data as SignInRequiredOnboardingResponseDto;
          push(RootStackScreenList.Onboarding, {
            image: tempUserData.tempUserInfo.profileImageUrl,
            tempToken: tempUserData.tempToken,
            nickName: tempUserData.tempUserInfo.nickname,
          });
          return;
        }
        const userResponse = response as SweetResponse<SignInResponseDto>;

        await tokenStorage.setTokens({
          accessToken,
          refreshToken: userResponse.data.accessToken,
        });
        const me = await getMe();
        setLoginUser(me);
      } catch (e) {
        if (e instanceof SweetError) {
          console.log('e ==> ', e.errorMessage);
        }
      }
    },
    [push, setLoginUser],
  );

  const kakaoLogin = useCallback(async () => {
    try {
      const kakaoAuth: KakaoOAuthToken = await KakaoLogin();
      login('KAKAO', kakaoAuth.accessToken);
    } catch (e) {
      if (e instanceof SweetError) {
        console.log(e.errorCode);
      }
    }
  }, [login]);
  const naverLogin = useCallback(async () => {
    try {
      const res = await NaverLogin.login();
      if (res.isSuccess && res.successResponse) {
        login('NAVER', res.successResponse.accessToken);
      } else {
        throw new Error('naver login error');
      }
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

      if (appleAuthRequestResponse.identityToken) {
        login('APPLE', appleAuthRequestResponse.identityToken);
      } else {
        throw new Error('apple login error');
      }
    } catch (error) {
      console.error('애플 로그인 실패', error);
    }
  }, [login]);

  return {kakaoLogin, naverLogin, appleLogin, socialLoginInitalize};
};
