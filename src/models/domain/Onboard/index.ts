import {Asset} from 'react-native-image-picker';

export interface OnboardingFormData {
  name: string;
  birth: string;
  interestSport: string;
  region: string;
  image?: Asset;
}
