import {OnboardingContentWrapper} from './OnboardingContentWrapper';
import {OnboardingContentHeader} from './OnboardingContentHeader';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {INTEREST_SPORTS_ITEM_LIST} from '../constants';
import {Svg} from '@/components/Svg';
import {useContext} from 'react';
import {OnboardingContext} from '../context/OnboardingContext';
import {colors} from '@/theme/colors';
import {Typo} from '@/components/Typo';

export const InterestSports = () => {
  const context = useContext(OnboardingContext);

  return (
    <OnboardingContentWrapper>
      <OnboardingContentHeader
        title="관심있는 운동을 선택해주세요."
        description="최대 3개까지 관심운동으로 설정할 수 있어요."
      />
      <View style={styles.wrapper}>
        <FlatList
          style={styles.flatList}
          data={INTEREST_SPORTS_ITEM_LIST}
          contentContainerStyle={styles.contentWrapper}
          columnWrapperStyle={styles.columnWrapper}
          keyExtractor={item => item.value}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  context?.onChange('interestSport', item.value);
                }}>
                <Svg
                  svgName={item.svg}
                  options={{
                    color:
                      context?.interestSport === item.value
                        ? colors.PRI
                        : colors.B_500,
                  }}
                />
                <Typo font="SubSmallM" style={styles.sportName} color="CG5">
                  {item.name}
                </Typo>
              </TouchableOpacity>
            );
          }}
          numColumns={3}
        />
      </View>
    </OnboardingContentWrapper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  flatList: {
    flex: 1,
  },
  item: {
    flex: 1,
    backgroundColor: colors.B_700,
    borderRadius: 10,
    alignItems: 'center',
    aspectRatio: 1,
    justifyContent: 'center',
  },
  columnWrapper: {
    gap: 16,
  },
  contentWrapper: {
    paddingTop: 16,
    paddingBottom: 60,
    gap: 16,
  },
  sportName: {
    marginTop: 8,
  },
});
