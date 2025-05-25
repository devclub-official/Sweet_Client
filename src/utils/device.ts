import {Dimensions, Platform} from 'react-native';

class DeviceInfo {
  private static instance: DeviceInfo;

  private constructor() {}

  public static getInstance(): DeviceInfo {
    if (!DeviceInfo.instance) {
      DeviceInfo.instance = new DeviceInfo();
    }
    return DeviceInfo.instance;
  }

  getDeviceHeight() {
    return Dimensions.get('window').height;
  }
  getDeviceWidth() {
    return Dimensions.get('window').width;
  }
  checkIOS() {
    return Platform.OS === 'ios';
  }
  checkAOS() {
    return Platform.OS === 'android';
  }
}

export const deviceInfo = DeviceInfo.getInstance();
