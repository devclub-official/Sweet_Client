import {OnboardingFormData} from '@/models/domain/Onboard';
import {SocialLoginCompleteRequestDto} from '@/models/dto/Auth/SignInDto';

export const buildSocialLoginCompleteRequestBody = (
  formData: OnboardingFormData,
): any => {
  // FIXME: 주석된 값 필요하지만 서버에서 에러나서  임시 주석
  return {
    nickname: formData.nickname,
    // birthDate: formData.birthDate,
    location: formData.location,
    interestedSports: formData.interestedSports,
    // profileImageUrl: '',
    // agreeTerms: formData.agreeTerms,
  };
};
