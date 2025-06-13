import {SafeAreaScreenWrapper} from '@/components/SafeAreaScreenWrapper';
import {useRef, useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {OnboardingStart} from './components/OnboardingStart';
import {BirthYear} from './components/BirthYear';
import {InterestSports} from './components/InterestSports';
import {ActivityRegion} from './components/ActivityRegion';
import {ProfileSetup} from './components/ProfileSetup';
import {Button} from '@/components/Button';
import {Svg} from '@/components/Svg';
import {OnboardingFormData} from '@/models/domain/Onboard';
import {OnboardingContext} from './context/OnboardingContext';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {PermissionBottomSheet} from './components/PermissionBottomSheet';

/**
 * STEP
 * 0: 시작화면
 * 1: 출생년도
 * 2: 관심있는 운동
 * 3: 활동지역
 * 4: 이름, 프로필사진
 */

export const Onboarding = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<OnboardingFormData>({
    name: '',
    birth: '',
    interestSport: '',
    region: '',
  });
  const ref = useRef<BottomSheetModal>(null);

  const handleFormDataChange = <T extends keyof OnboardingFormData>(
    key: T,
    value: OnboardingFormData[T],
  ) => {
    setFormData(prev => ({...prev, [key]: value}));
  };
  const handleNextPress = () => {
    if (step === 0) {
      ref.current?.present();
    } else {
      setStep(step + 1);
    }
  };

  const renderButtonText = () => {
    switch (step) {
      case 0:
        return '시작하기';
      case 4:
        return '완료';
      default:
        return '다음';
    }
  };
  const renderScreen = () => {
    switch (step) {
      case 0:
        return <OnboardingStart />;
      case 1:
        return <BirthYear />;
      case 2:
        return <InterestSports />;
      case 3:
        return <ActivityRegion />;
      case 4:
        return <ProfileSetup />;
    }
  };

  return (
    <OnboardingContext.Provider
      value={{...formData, onChange: handleFormDataChange}}>
      <SafeAreaScreenWrapper>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.formWrapper}>
            {step !== 0 && (
              <TouchableOpacity
                onPress={() => {
                  setStep(step - 1);
                }}>
                <Svg svgName="ChevronLeft" />
              </TouchableOpacity>
            )}

            <View style={styles.mainContent}>
              <ActivityRegion />
            </View>
            {/* <View style={styles.mainContent}>{renderScreen()}</View> */}

            <Button onPress={handleNextPress}>{renderButtonText()}</Button>
          </View>
        </TouchableWithoutFeedback>

        <PermissionBottomSheet
          ref={ref}
          onStateChange={state => console.log('state ==>', state)}
          onConfirmPress={() => {
            setStep(step + 1);
            ref.current?.close();
          }}
          onSkipPress={() => {
            setStep(step + 1);
            ref.current?.close();
          }}
        />
      </SafeAreaScreenWrapper>
    </OnboardingContext.Provider>
  );
};

const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  mainContent: {
    flex: 1,
  },
});
