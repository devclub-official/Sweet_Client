import {colors} from '@/theme/colors';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

interface Props extends TouchableOpacityProps {
  type?: 'primary' | 'secondary' | 'black';
  size?: 'large' | 'small';
  fill?: boolean;
}
export const Button = ({
  type = 'primary',
  size = 'large',
  fill = true,
  ...rest
}: Props) => {
  const fillStyle = '';
  const sizeStyle = '';
  const typeStyle = '';

  const createButtonStyle = (): StyleProp<ViewStyle> => {
    const style: StyleProp<ViewStyle> = {};
    if (fill) {
      switch (type) {
        case 'primary':
          style.backgroundColor = colors.PRIMARY;
          break;
        case 'secondary':
          style.backgroundColor = colors.SECONDARY;
          break;
        default:
          style.backgroundColor = colors.BLACK;
      }
    } else {
      style.borderWidth = 1;
      switch (type) {
        case 'primary':
          style.borderColor = colors.PRIMARY;
          break;
        case 'secondary':
          style.borderColor = colors.SECONDARY;
          break;
        default:
          style.borderColor = colors.BLACK;
      }
    }

    return {};
  };

  return <TouchableOpacity {...rest} style={[styles.buttonDefaultStyle]} />;
};

const styles = StyleSheet.create({
  buttonDefaultStyle: {
    borderRadius: 10,
  },
});
