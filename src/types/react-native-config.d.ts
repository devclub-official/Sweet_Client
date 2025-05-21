declare module 'react-native-config' {
  export interface NativeConfig {
    MAIN_API_ORIGIN?: string;
    AUTH_API_ORIGIN?: string;
    NAVER_CLIENT_ID?: string;
    KAKAO_NATIVE_APP_KEY?: string;
    PTPT_APP_NAME?: string;
    NAVER_CLIENT_SECRET?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
