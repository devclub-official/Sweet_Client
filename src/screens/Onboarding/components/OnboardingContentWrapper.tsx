import {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';

interface Props extends PropsWithChildren {}
export const OnboardingContentWrapper = ({children}: Props) => {
  return <View style={styles.wrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 40,
    // alignItems: 'center',
  },
});
