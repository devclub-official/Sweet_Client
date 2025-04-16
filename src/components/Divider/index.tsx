import {colors} from '@/theme/colors';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const Divider = ({style}: Props) => {
  return <View style={[styles.divider, style]} />;
};
const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: colors.B_700,
  },
});
