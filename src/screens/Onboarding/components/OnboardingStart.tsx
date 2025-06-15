import {Svg} from '@/components/Svg';
import {Typo} from '@/components/Typo';
import {StyleSheet, View} from 'react-native';

export const OnboardingStart = () => {
  return (
    <View style={styles.wrapper}>
      <Svg svgName="OnboardingHeart" />
      <Typo font="HeadLargeB" style={styles.title}>
        만나서 반가워요!
      </Typo>
      <Typo font="Dossaem03" style={styles.description}>
        <Typo font="Dossaem03" color="PRI_500">
          피티피티
        </Typo>
        를 회원님과 딱 맞게 맞춰볼까요?
      </Typo>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: '30%',
    alignItems: 'center',
  },
  title: {marginTop: 20},
  description: {marginTop: 16},
});
