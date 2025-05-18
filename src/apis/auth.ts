import Config from 'react-native-config';
import {SignInRequestDto, SignInResponseDto} from '@/models/dto/Auth/SignInDto';
import {api} from './common';

export const signIn = async (body: SignInRequestDto) => {
  const res = await api.post<SignInResponseDto>({
    url: `${Config.AUTH_API_ORIGIN}/auth/login`,
    body,
  });
  console.log('res ==> ', res);
  return res;
};
