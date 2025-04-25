declare module 'react-native-config' {
  export interface NativeConfig {
    API_ORIGIN?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
