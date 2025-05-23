import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Svg} from '../Svg';

export const HomeHeaderRight = () => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={() => {
          //TODO: 계획 페이지로 이동
        }}>
        <Svg svgName="Calendar" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          //TODO: 알림으로 이동
        }}>
        <Svg svgName="NewAlarm" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    gap: 12,
  },
});
