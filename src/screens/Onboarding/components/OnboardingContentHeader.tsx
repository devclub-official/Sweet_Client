import {Typo} from '@/components/Typo';
import {StyleSheet, View} from 'react-native';

interface Props {
  title: string;
  description: string;
}

export const OnboardingContentHeader = ({title, description}: Props) => {
  return (
    <View style={styles.wrapper}>
      <Typo font="HeadSmallB">{title}</Typo>
      <Typo font="BodyMediumR" color="CG15" style={styles.description}>
        {description}
      </Typo>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  description: {
    marginTop: 8,
  },
});
