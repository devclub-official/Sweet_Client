import {Text, TextProps} from 'react-native';

interface Props extends TextProps {}

export const Typo = (props: Props) => {
  return <Text {...props} />;
};
