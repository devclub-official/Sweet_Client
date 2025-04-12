import {colors} from '@/theme/colors';
import {useEffect, useRef} from 'react';
import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';

interface Props {
  value: boolean;
  onPress: () => void;
}

export const Switch = ({value, onPress}: Props) => {
  const animation = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [animation, value]);

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={onPress} style={styles.background}>
        <Animated.View style={[styles.circle, {transform: [{translateX}]}]} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 36,
    height: 20,
  },
  background: {
    flex: 1,
    paddingHorizontal: 2,
    paddingVertical: 2,
    borderRadius: 18,
    backgroundColor: colors.GRAY_200,
  },
  circle: {
    width: 16,
    height: 16,
    backgroundColor: colors.BLACK,
    borderRadius: 8,
  },
});
