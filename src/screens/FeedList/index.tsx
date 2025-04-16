import { Button } from '@/components/Button';
import { AppStatusBar } from '@/components/StatusBar';
import { Typo } from '@/components/Typo';
import { colors } from '@/theme/colors';
import React from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { NavigationState, Route, SceneMap, SceneRendererProps, TabView } from 'react-native-tab-view';
import { FeedList } from './components/FeedList';
import { FollowStatus } from '@/models/feed';
import { SafeAreaScreenWrapper } from '@/components/SafeAreaScreenWrapper';
import { Divider } from '@/components/Divider';
import { Strings } from './constants/strings';

const FirstRoute = () => (
  <FeedList followStatus={FollowStatus.FOLLOWING} />
);
const SecondRoute = () => (
  <FeedList followStatus={FollowStatus.NOT_FOLLOWING} />
);

export const FeedMain = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const routes = [
    { key: 'following', title: Strings.FOLLOWING },
    { key: 'all', title: Strings.EXPLORE },
  ];
  const renderScene = SceneMap({
    following: FirstRoute,
    all: SecondRoute,
  });

  const renderTab = (props: SceneRendererProps & {
    navigationState: NavigationState<Route>;
  }) => {
    return (
      <View style={styles.tab}>
        {props.navigationState.routes.map((route: Route, i: number) => {
          return (
            <Button
              key={route.key}
              onPress={() => setIndex(i)}
            >
              <Typo style={styles.tabTypo}>{route.title}</Typo>
              {index === i ? <Divider style={styles.tabIndicator} /> : null}
            </Button>
          );
        })}

      </View>
    );
  };

  return (
    <SafeAreaScreenWrapper>
      <AppStatusBar backgroundColor={colors.BLACK} />

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        style={styles.tabContainer}
        renderTabBar={renderTab}
      />
    </SafeAreaScreenWrapper>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
  },
  tab: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  tabTypo: {
    margin: 10,
    color: colors.GRAY_400,
  },
  tabIndicator: {
    backgroundColor: colors.PRIMARY,
  },
});