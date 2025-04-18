import {TypoName} from '@/theme/fonts';
import {Text, TextProps} from 'react-native';

interface Props extends TextProps {
  font?: TypoName;
}

export const Typo = (props: Props) => {
  return <Text {...props} />;
};
