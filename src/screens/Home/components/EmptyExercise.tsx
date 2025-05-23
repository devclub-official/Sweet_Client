import {Typo} from '@/components/Typo';
import {colors} from '@/theme/colors';
import {StyleSheet, View} from 'react-native';

export const EmptyExercise = () => {
  return (
    <View style={styles.wrapper}>
      <Typo font="Dossaem04" color="B_700">
        어떤 운동을 해볼까요?
      </Typo>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: colors.PRI_200,
  },
});
