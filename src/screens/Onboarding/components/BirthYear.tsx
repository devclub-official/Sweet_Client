import {Typo} from '@/components/Typo';
import {useContext, useRef} from 'react';
import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {OnboardingContext} from '../context/OnboardingContext';
import {colors} from '@/theme/colors';
import {OnboardingContentWrapper} from './OnboardingContentWrapper';
import {OnboardingContentHeader} from './OnboardingContentHeader';

export const BirthYear = () => {
  const context = useContext(OnboardingContext);
  const inputRef = useRef<TextInput>(null);

  const handleBirthChange = (birth: string) => {
    const onlyDigits = birth.replace(/[^0-9]/g, '');
    if (onlyDigits.length <= 4) {
      context?.onChange('birthDate', onlyDigits);
      if (onlyDigits.length === 4) {
        Keyboard.dismiss();
      }
    }
  };
  return (
    <OnboardingContentWrapper>
      <OnboardingContentHeader
        title="출생년도를 알려주세요."
        description="연령대에 맞는 서비스를 제공해드릴게요."
      />
      <View style={styles.birthWrapper}>
        <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
          <View style={styles.inputWrapper}>
            <TextInput
              ref={inputRef}
              autoFocus
              value={context?.birthDate || ''}
              onChangeText={handleBirthChange}
              keyboardType="number-pad"
              style={styles.input}
              maxLength={4}
            />
            <View style={styles.boxWrapper}>
              {[...Array(4)].map((_, i) => (
                <View key={i} style={styles.charBox}>
                  <Typo font="HeadLargeB">{context?.birthDate[i] ?? ''}</Typo>
                </View>
              ))}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </OnboardingContentWrapper>
  );
};

const styles = StyleSheet.create({
  birthWrapper: {
    marginTop: 50,
  },
  inputWrapper: {
    alignItems: 'center',
    marginTop: 40,
  },
  input: {
    position: 'absolute',
    opacity: 0,
  },
  boxWrapper: {
    flexDirection: 'row',
    gap: 12,
  },
  charBox: {
    width: 42,
    height: 62,
    borderBottomWidth: 2,
    borderBottomColor: colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
