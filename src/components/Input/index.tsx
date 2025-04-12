import {TextInput, TextInputProps} from 'react-native';

interface Props extends TextInputProps {}

export const Input = (props: Props) => {
  return <TextInput {...props} />;
};
