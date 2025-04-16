import {TypoName} from '@/theme/fonts';
import {Text, TextProps} from 'react-native';

interface Props extends TextProps {
  font?: TypoName;
}

export const Typo = (props: Props) => {
  const style = props.style || {};
  return <Text {...props} style={[style, {color: 'white'}]} />;
};
