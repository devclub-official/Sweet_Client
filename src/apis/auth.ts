import Config from 'react-native-config';
import {
  SignInRequiredOnboardingResponseDto,
  SignInResponseDto,
  SocialLoginCompleteRequestDto,
  SocialLoginRequestDto,
} from '@/models/dto/Auth/SignInDto';
import {api} from './common';
import {SweetResponse} from '@/types/network';
import {UserInfo} from '@/types/user';

export const socialLogin = async (body: SocialLoginRequestDto) => {
  const res = await api.post<
    SweetResponse<SignInResponseDto | SignInRequiredOnboardingResponseDto>
  >({
    url: `${Config.AUTH_API_ORIGIN}/social/login`,
    body,
  });
  return res;
};

export const getMe = async () => {
  const me = await api.get<UserInfo>({
    url: `${Config.AUTH_API_ORIGIN}/api/users`,
  });
  return me;
};

export const socialLoginComplete = async (
  tempToken: string,
  body: SocialLoginCompleteRequestDto,
) => {
  const res = await api.post<SweetResponse<SignInResponseDto>>({
    url: `${Config.AUTH_API_ORIGIN}/social/signup/complete`,
    body,
    headers: {
      Authorization: `Bearer ${tempToken}`,
    },
  });
  return res;
};
