import {Svg} from '@/components/Svg';
import {Typo} from '@/components/Typo';
import {colors} from '@/theme/colors';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

interface Props extends TouchableOpacityProps {
  type: 'apple' | 'naver' | 'kakao';
}

export const SocialLoginButton = ({type}: Props) => {
  const renderButton = () => {
    switch (type) {
      case 'apple':
        return (
          <View style={[styles.button, styles.apple]}>
            <Svg svgName="AppleLogin" />
            <Typo font="BodyLargeR" color="B_BASE_PRI" style={styles.font}>
              Apple로 계속하기
            </Typo>
          </View>
        );
      case 'kakao':
        return (
          <View style={[styles.button, styles.kakao]}>
            <Svg svgName="KakaoLogin" />
            <Typo font="BodyLargeR" color="B_BASE_PRI" style={styles.font}>
              카카오톡으로 계속하기
            </Typo>
          </View>
        );
      case 'naver':
        return (
          <View style={[styles.button, styles.naver]}>
            <Svg svgName="NaverLogin" />
            <Typo font="BodyLargeR" color="WHITE" style={styles.font}>
              네이버로 계속하기
            </Typo>
          </View>
        );
    }
  };
  return <TouchableOpacity>{renderButton()}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    borderRadius: 10,
    padding: 16,
    gap: 10,
  },
  font: {
    flex: 1,
    textAlign: 'center',
  },
  kakao: {
    backgroundColor: colors.KAKAO,
  },
  naver: {
    backgroundColor: colors.NAVER,
  },
  apple: {
    backgroundColor: colors.B_50,
  },
});
