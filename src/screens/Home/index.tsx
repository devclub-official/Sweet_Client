import {SafeAreaScreenWrapper} from '@/components/SafeAreaScreenWrapper';
import {Svg} from '@/components/Svg';
import {Typo} from '@/components/Typo';
import {StyleSheet, View} from 'react-native';
import {EmptyExercise} from './components/EmptyExercise';
import {ExerciseTime} from './components/ExerciseTime';
import {Button} from '@/components/Button';

export const Home = () => {
  return (
    <SafeAreaScreenWrapper>
      <View style={styles.wrapper}>
        <View style={styles.contentWrapper}>
          <Typo font="Dossaem02">
            안녕하세요!{' '}
            <Typo font="Dossaem02" color="SUB02">
              Kim_nugu
            </Typo>
            님
          </Typo>
          <View style={styles.todaysExercise}>
            <Svg svgName="TodaysExercise" />
          </View>
          <View style={styles.exerciseType}>
            <EmptyExercise />
          </View>
          <ExerciseTime />
        </View>
        <View>
          <View style={styles.buttonWrapper}>
            <Button>시작하기</Button>
          </View>
        </View>
      </View>
    </SafeAreaScreenWrapper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
    flex: 1,
  },
  contentWrapper: {
    alignItems: 'center',
    flex: 1,
  },
  todaysExercise: {
    marginTop: 10,
  },
  exerciseType: {
    marginVertical: 30,
  },
  buttonWrapper: {
    marginTop: 30,
  },
});
