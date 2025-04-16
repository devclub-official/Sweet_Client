import {TypoName} from '@/theme/fonts';
import {Text, TextProps} from 'react-native';

interface Props extends TextProps {
  font?: TypoName;
}

// export const Typo = (props: Props) => {
//   return <Text {...props} />;
// };

export const Typo = ({ font, style, ...rest }: Props) => {
  return <Text style={[font, style]} {...rest} />;
};
