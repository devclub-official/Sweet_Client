import {SignInRequestDto, SignInResponseDto} from '@/models/dto/Auth/SignInDto';
import {api} from './common';

export const signIn = async (body: SignInRequestDto) => {
  const res = await api.post<any>({url: '/auth/login', body});
  console.log('res ==>', res);
  return res;
};
