import {OnboardingFormData} from '@/models/domain/Onboard';
import {createContext} from 'react';

interface OnboardingFormDataChange {
  onChange: <T extends keyof OnboardingFormData>(
    key: T,
    value: OnboardingFormData[T],
  ) => void;
}

export const OnboardingContext = createContext<
  (OnboardingFormData & OnboardingFormDataChange) | undefined
>(undefined);
