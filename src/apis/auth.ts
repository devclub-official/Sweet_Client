import Config from 'react-native-config';
import {SignInRequestDto, SignInResponseDto} from '@/models/dto/Auth/SignInDto';
import {api} from './common';
import {SweetResponse} from '@/types/network';
import {UserInfo} from '@/types/user';

export const signIn = async (body: SignInRequestDto) => {
  const res = await api.post<SweetResponse<SignInResponseDto>>({
    url: `${Config.AUTH_API_ORIGIN}/auth/login`,
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
