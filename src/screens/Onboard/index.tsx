import {Camera} from '@/assets/svgs/Camera';
import {Button} from '@/components/Button';
import {Input} from '@/components/Input';
import {SafeAreaScreenWrapper} from '@/components/SafeAreaScreenWrapper';
import {Typo} from '@/components/Typo';
import {colors} from '@/theme/colors';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

export const Onboard = () => {
  return (
    <SafeAreaScreenWrapper>
      <View style={styles.formWrapper}>
        <Typo>환영합니다.</Typo>
        <Typo style={styles.description}>
          피티피티에서 사용할 프로필을 완성해주세요.
        </Typo>
        <View style={styles.imageFormWrapper}>
          <View style={styles.imageWrapper}>
            <View style={styles.image} />
            <TouchableOpacity style={styles.cameraButton}>
              <Camera />
            </TouchableOpacity>
          </View>
        </View>
        <Input />
        <Typo style={styles.description}>
          *공백 포함 최대 10자까지 입력할 수 있습니다.
        </Typo>
      </View>
      <View style={styles.buttonWrapper}>
        <Button>
          <Typo>확인</Typo>
        </Button>
      </View>
    </SafeAreaScreenWrapper>
  );
};

const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
  },
  description: {
    marginTop: 8,
  },
  imageFormWrapper: {
    paddingVertical: 50,
    alignItems: 'center',
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'red',
  },
  cameraButton: {
    position: 'absolute',
    paddingVertical: 10,
    paddingHorizontal: 8,
    bottom: 0,
    right: 0,
    backgroundColor: colors.GRAY_50,
    borderRadius: 100,
  },
  buttonWrapper: {
    paddingTop: 40,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
});
