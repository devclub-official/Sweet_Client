export type SocialLoginProvider = 'KAKAO' | 'NAVER' | 'APPLE';
export interface SocialLoginRequestDto {
  provider: SocialLoginProvider;
  accessToken: string;
}

export interface SignInResponseDto {
  accessToken: string;
  refreshToken: string;
}
