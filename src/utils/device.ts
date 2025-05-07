import {Dimensions} from 'react-native';

export const getDeviceHeight = () => {
  return Dimensions.get('window').height;
};
