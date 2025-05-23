import {ColorName, colors} from '@/theme/colors';
import {FONTS, TypoName} from '@/theme/fonts';
import {Text, TextProps} from 'react-native';

export interface TypoProps extends TextProps {
  font?: TypoName;
  color?: ColorName;
}

export const Typo = ({
  color = 'CG5',
  font = 'BodySmallR',
  style,
  ...rest
}: TypoProps) => {
  return (
    <Text {...rest} style={[style, {color: colors[color], ...FONTS[font]}]} />
  );
};
