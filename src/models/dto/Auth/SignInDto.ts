export type SocialLoginProvider = 'KAKAO' | 'NAVER' | 'APPLE';
export interface SocialLoginRequestDto {
  provider: SocialLoginProvider;
  accessToken: string;
}

export interface SignInResponseDto {
  accessToken: string;
  refreshToken: string;
}
export interface SignInRequiredOnboardingResponseDto {
  status: string;
  tempToken: string;
  tokens?: string;
  tempUserInfo: {
    email?: string;
    socialId: string;
    socialType: string;
    nickname?: string;
    profileImageUrl?: string;
  };
  requiredFields: string[];
  fieldDescriptions: {
    phoneNumber: string;
    nickname: string;
    bio: string;
    agreeTerms: string;
  };
}

export interface SocialLoginCompleteRequestDto {
  nickname: string;
  birthDate: string;
  location: string;
  interestedSports: string[];
  profileImageUrl: string;
  agreeTerms: boolean;
}
