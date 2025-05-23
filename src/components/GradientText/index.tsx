import MaskedView from '@react-native-masked-view/masked-view';
import {Typo, TypoProps} from '../Typo';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, View} from 'react-native';
import {ColorName, colors} from '@/theme/colors';

interface Props extends TypoProps {
  gradientColors: [ColorName, ColorName];
  start?: {
    x: number;
    y: number;
  };
  end?: {
    x: number;
    y: number;
  };
}
export const GradientText = ({
  font,
  start = {x: 0, y: 0},
  end = {x: 0, y: 1},
  gradientColors,
  children,
}: Props) => {
  return (
    <MaskedView maskElement={<Typo font={font}>{children}</Typo>}>
      <LinearGradient
        colors={[colors[gradientColors[0]], colors[gradientColors[1]]]}
        start={start}
        end={end}>
        <View>
          <Typo font={font} style={styles.gradientText}>
            {children}
          </Typo>
        </View>
      </LinearGradient>
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  gradientText: {
    opacity: 0,
  },
});
