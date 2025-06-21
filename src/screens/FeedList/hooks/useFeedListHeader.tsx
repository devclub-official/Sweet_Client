import {Svg} from '@/components/Svg';
import {RootStackParamList, RootStackScreenList} from '@/types/navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

export const useFeedListHeader = () => {
  const renderHeaderTitle = useCallback(() => <Svg svgName="Logo" />, []);

  const renderFeedListHeaderRight = useCallback(
    (navigation: StackNavigationProp<RootStackParamList, string>) => (
      <View style={styles.headerRightContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(RootStackScreenList.CreateFeed);
          }}>
          <Svg svgName="Plus" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(RootStackScreenList.FeedDetail, {
              id: '3',
            });
          }}>
          <Svg svgName="NewAlarm" />
        </TouchableOpacity>
      </View>
    ),
    [],
  );

  const renderProfileHeaderRight = useCallback(() => (
      <View style={styles.headerRightContainer}>
        <TouchableOpacity>
          <Svg svgName="NewAlarm" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Svg svgName="More" />
        </TouchableOpacity>
      </View>
    ),
    [],
  );

  return {
    renderHeaderTitle,
    renderFeedListHeaderRight,
    renderProfileHeaderRight,
  };
};

const styles = StyleSheet.create({
  headerRightContainer: {
    flexDirection: 'row',
    gap: 12,
  },
});
