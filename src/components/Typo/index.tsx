import {FONTS, TypoName} from '@/theme/fonts';
import {Text, TextProps} from 'react-native';

interface Props extends TextProps {
  font?: TypoName;
  color?: string;
}

export const Typo = ({color, font = 'Placeholder', ...rest}: Props) => {
  return <Text {...rest} style={{color, ...FONTS[font]}} />;
};
