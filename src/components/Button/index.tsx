import {ColorName, colors} from '@/theme/colors';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {Typo} from '../Typo';
import {useMemo} from 'react';
import {TypoName} from '@/theme/fonts';

interface Props extends TouchableOpacityProps {
  isLoading?: boolean;
  type?: 'primary' | 'black';
  size?: 'large' | 'medium' | 'small';
  fill?: boolean;
  children: string;
}
export const Button = ({
  type = 'primary',
  size = 'large',
  fill = true,
  disabled,
  children,
  ...rest
}: Props) => {
  const buttonTheme = useMemo(() => {
    const style: StyleProp<ViewStyle> = {};
    switch (type) {
      case 'primary':
        if (disabled) {
          style.backgroundColor = colors.PRI_200;
          style.opacity = 0.75;
        } else {
          style.backgroundColor = colors.PRI;
        }
        break;
      case 'black':
        if (fill) {
          style.backgroundColor = colors.B_600;
        } else {
          style.borderColor = colors.B_300;
          style.borderWidth = 1;
        }
        break;
      default:
        style.backgroundColor = colors.PRI;
    }

    switch (size) {
      case 'large':
        style.paddingVertical = 16;
        break;
      case 'medium':
        style.paddingVertical = 9;
        break;
      case 'small':
        style.paddingVertical = 6;
        break;
    }

    return style;
  }, [fill, size, type, disabled]);

  const fontName = useMemo((): TypoName => {
    switch (size) {
      case 'large':
        return 'SubMediumB';
      case 'medium':
        return 'BodySmallR';
      case 'small':
        return 'CaptionR';
      default:
        return 'SubMediumB';
    }
  }, [size]);
  const fontColor = useMemo((): ColorName => {
    switch (type) {
      case 'primary':
        if (disabled) {
          return 'PRI';
        }
        return 'B_BASE_PRI';
      case 'black':
        if (fill) {
          return 'B_BASE_PRI';
        }
        return 'CG5';
    }
  }, [disabled, type, fill]);

  return (
    <TouchableOpacity
      {...rest}
      disabled={disabled}
      style={[styles.buttonDefaultStyle, buttonTheme]}>
      <Typo font={fontName} color={fontColor} style={styles.text}>
        {children}
      </Typo>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonDefaultStyle: {
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
  },
});
