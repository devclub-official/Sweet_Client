import {Input} from '@/components/Input';
import {colors} from '@/theme/colors';
import {StyleSheet} from 'react-native';

interface Props {
  value: string;
  placeholder: string;
  onChange: (e: string) => void;
}

export const CreateFeedTextArea = ({value, placeholder, onChange}: Props) => {
  return (
    <Input
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      placeholderTextColor={colors.CG15}
      multiline
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 160,
    padding: 16,
    backgroundColor: colors.B_700,
    color: colors.B_50,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
