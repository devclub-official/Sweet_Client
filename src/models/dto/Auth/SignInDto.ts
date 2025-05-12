export interface SignInRequestDto {
  email: string;
  password: string;
}

export interface SignInResponseDto {
  accessToken: string;
  refreshToken: string;
}
