import { Typo } from '@/components/Typo';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { SafeAreaScreenWrapper } from '@/components/SafeAreaScreenWrapper';
import { AppStatusBar } from '@/components/StatusBar';
import { colors } from '@/theme/colors';
import { NavigationState, Route, SceneMap, SceneRendererProps, TabView } from 'react-native-tab-view';
import { useState } from 'react';
import { Strings as FeedCommonStrings } from '@/components/Feed/constants/strings';
import { Strings as FeedListStrings } from './constants/strings';
import { Divider } from '@/components/Divider';
import { FeedFlatList } from './component/FeedFlatList';
import { FollowStatus } from '@/models/domain/Feed/FollowStatus';

const FollowingRoute = () => (
  <FeedFlatList followStatus={FollowStatus.FOLLOWING} />
);
const SecondRoute = () => (
  <FeedFlatList followStatus={FollowStatus.UNFOLLOWED} />
);

export const FeedList = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const routes = [
    { key: 'following', title: FeedCommonStrings.FOLLOWING },
    { key: 'all', title: FeedListStrings.EXPLORE },
  ];
  const renderScene = SceneMap({
    following: FollowingRoute,
    all: SecondRoute,
  });
  const renderTab = (props: SceneRendererProps & {
    navigationState: NavigationState<Route>;
  }) => {
    return (
      <View style={styles.tabContainer}>
        {props.navigationState.routes.map((route: Route, i: number) => {
          return (
            <View key={route.key}>
              <Typo onPress={() => setIndex(i)} color="B_400" font="SubSmallM" style={styles.tabTypo}>{route.title}</Typo>
              {index === i ? <Divider style={styles.tabIndicator} /> : null}
            </View>
          );
        })}

      </View>
    );
  };

  return (
    <SafeAreaScreenWrapper>
      <AppStatusBar backgroundColor={colors.B_BASE_PRI} />

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        style={styles.rootContainer}
        renderTabBar={renderTab}
      />

    </SafeAreaScreenWrapper>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  tabTypo: {
    margin: 10,
  },
  tabIndicator: {
    backgroundColor: colors.PRI,
  },
});
