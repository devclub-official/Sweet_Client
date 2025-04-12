import {PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

export const SafeAreaScreenWrapper = ({children}: PropsWithChildren) => {
  return <SafeAreaView style={styles.wrapper}>{children}</SafeAreaView>;
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
