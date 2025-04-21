import {ColorName, colors} from '@/theme/colors';
import {FONTS, TypoName} from '@/theme/fonts';
import {Text, TextProps} from 'react-native';

interface Props extends TextProps {
  font?: TypoName;
  color?: ColorName;
}

export const Typo = ({
  color = 'CG5',
  font = 'BodySmallR',
  style,
  ...rest
}: Props) => {
  return (
    <Text {...rest} style={[style, {color: colors[color], ...FONTS[font]}]} />
  );
};
