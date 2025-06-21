import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {OnboardingContentWrapper} from './OnboardingContentWrapper';
import {OnboardingContentHeader} from './OnboardingContentHeader';
import {Input} from '@/components/Input';
import {colors} from '@/theme/colors';
import {Typo} from '@/components/Typo';
import {FONTS} from '@/theme/fonts';
import {Svg} from '@/components/Svg';
import {useContext} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {OnboardingContext} from '../context/OnboardingContext';

interface Props {
  socialImage?: string;
}
export const ProfileSetup = ({socialImage}: Props) => {
  const context = useContext(OnboardingContext);

  const handleNameChange = (name: string) => {
    context?.onChange('nickname', name);
  };
  const handleImageUpload = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      res => {
        if (res.assets) {
          context?.onChange('image', res.assets[0]);
        }
      },
    );
  };
  return (
    <OnboardingContentWrapper>
      <OnboardingContentHeader
        title="프로필을 완성해주세요."
        description="마지막 단계에요! 어떤 이름으로 불러드릴까요?"
      />
      <View style={styles.wrapper}>
        <View style={styles.imageWrapper}>
          <View style={styles.uploadedImage}>
            {context?.image ? (
              <Image style={styles.image} source={{uri: context.image.uri}} />
            ) : (
              <View style={styles.defaultImage}>
                <Svg svgName="PtptConsonant" />
              </View>
            )}

            <TouchableOpacity
              style={styles.uploadButton}
              onPress={handleImageUpload}>
              <Svg svgName="Camera" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <Typo font="SubSmallM">닉네임</Typo>
          <Input
            placeholder="입력하기"
            onChangeText={handleNameChange}
            placeholderTextColor={colors.CG10}
            value={context?.nickname || ''}
            style={styles.input}
          />
        </View>
        <View style={styles.descriptionWrapper}>
          <Typo font="CaptionR">
            *공백 포함 최대 10자까지 입력할 수 있습니다.
          </Typo>
        </View>
      </View>
    </OnboardingContentWrapper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  imageWrapper: {
    alignItems: 'center',
    paddingVertical: 50,
  },
  uploadedImage: {
    position: 'relative',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  defaultImage: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.PRI_200,
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  uploadButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36,
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderRadius: 18,
    backgroundColor: colors.B_50,
  },
  inputWrapper: {
    padding: 20,
    backgroundColor: colors.B_700,
    borderRadius: 20,
    gap: 12,
  },
  input: {
    color: colors.CG10,
    ...FONTS.SubMediumB,
  },
  descriptionWrapper: {
    marginTop: 8,
  },
});
