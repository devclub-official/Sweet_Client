import {colors} from '@/theme/colors';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Svg} from '../Svg';
import {MainTabParam} from '@/types/navigation';
import {SvgNames} from '@/types/svg';

interface Props {
  bottomTabBarProps: BottomTabBarProps;
}

const TAB_BAR_ICON: Record<keyof MainTabParam, SvgNames> = {
  HomeTab: 'Home',
  FeedTab: 'Dumbbell',
  GroupTab: 'GroupFire',
  MyPageTab: 'Profile',
};

export const BottomTabBar = ({bottomTabBarProps}: Props) => {
  const insets = useSafeAreaInsets();
  const {state, navigation} = bottomTabBarProps;

  return (
    <View style={{paddingBottom: insets.bottom}}>
      <View style={styles.tabWrapper}>
        {state.routeNames.map((name, index) => {
          return (
            <TouchableOpacity
              key={name}
              style={styles.tabButton}
              onPress={() => {
                navigation.navigate(name as keyof MainTabParam);
              }}>
              <Svg
                svgName={TAB_BAR_ICON[name as keyof MainTabParam]}
                options={{
                  color: index === state.index ? colors.PRI : colors.WHITE,
                }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
  },
});
