import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface Props extends TouchableOpacityProps {}
export const Button = (props: Props) => {
  return <TouchableOpacity {...props} />;
};
