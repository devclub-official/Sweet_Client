import {Asset} from 'react-native-image-picker';

export interface OnboardingFormData {
  nickname: string;
  birthDate: string;
  interestedSports: string[];
  location: string;
  image?: Asset;
  agreeTerms: boolean;
}
