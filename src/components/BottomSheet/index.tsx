import {colors} from '@/theme/colors';
import {
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetModalProps,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {forwardRef, useCallback, useMemo} from 'react';
import {Animated, StyleSheet} from 'react-native';
import {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props extends BottomSheetModalProps {
  children: React.ReactNode;
}

export const BottomSheet = forwardRef<BottomSheetModal, Props>(
  ({children, ...rest}: Props, ref) => {
    const insets = useSafeAreaInsets();

    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <CustomBackdrop {...props} ref={ref} />
      ),
      [ref],
    );

    return (
      <BottomSheetModal
        ref={ref}
        handleComponent={() => null}
        backdropComponent={renderBackdrop}
        backgroundStyle={styles.wrapper}
        {...rest}>
        <BottomSheetView style={{paddingBottom: insets.bottom}}>
          {children}
        </BottomSheetView>
      </BottomSheetModal>
    );
  },
);

const CustomBackdrop = forwardRef<BottomSheetModal, BottomSheetBackdropProps>(
  ({animatedIndex, style}, ref) => {
    const containerAnimatedStyle = useAnimatedStyle(() => ({
      opacity: interpolate(
        animatedIndex.value,
        [0, 1],
        [0, 1],
        Extrapolation.CLAMP,
      ),
    }));

    const containerStyle = useMemo(
      () => [
        style,
        {
          backgroundColor: 'rgba(0,0,0,0.5)',
        },
        containerAnimatedStyle,
      ],
      [style, containerAnimatedStyle],
    );

    return (
      <Animated.View
        style={containerStyle}
        onTouchStart={() => {
          if (typeof ref !== 'function' && ref?.current) {
            ref.current.close();
          }
        }}
      />
    );
  },
);

const styles = StyleSheet.create({
  wrapper: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.B_700,
  },
  contentWrapper: {
    padding: 20,
    paddingBottom: 30,
  },
  permissionDescription: {
    marginTop: 30,
  },
  permissionWrapper: {
    marginTop: 40,
  },
  permissionList: {
    marginTop: 20,
    gap: 20,
  },
  permissionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  permissionItemName: {
    width: 36,
    marginLeft: 16,
    marginRight: 16,
  },
  buttonWrapper: {
    marginTop: 40,
    gap: 20,
  },
  skipButton: {
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
