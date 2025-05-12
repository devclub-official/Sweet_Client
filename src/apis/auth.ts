import {SignInRequestDto, SignInResponseDto} from '@/models/dto/Auth/SignInDto';
import {api} from './common';

export const signIn = async (body: SignInRequestDto) => {
  const res = await api.post<SignInResponseDto>({url: '/api/login', body});
  return res;
};
