import {OnboardingContentWrapper} from './OnboardingContentWrapper';
import {OnboardingContentHeader} from './OnboardingContentHeader';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {INTEREST_SPORTS_ITEM_LIST} from '../constants';
import {Svg} from '@/components/Svg';
import {useContext} from 'react';
import {OnboardingContext} from '../context/OnboardingContext';
import {colors} from '@/theme/colors';

export const InterestSports = () => {
  const context = useContext(OnboardingContext);

  return (
    <OnboardingContentWrapper>
      <OnboardingContentHeader
        title="관심있는 운동을 선택해주세요."
        description="최대 3개까지 관심운동으로 설정할 수 있어요."
      />
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <FlatList
          style={{flex: 1}}
          data={INTEREST_SPORTS_ITEM_LIST}
          contentContainerStyle={{
            paddingHorizontal: 12,
            paddingTop: 16,
            paddingBottom: 60,
          }}
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
                        : colors.B_700,
                  }}
                />
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
  wrapper: {},
  item: {
    flex: 1,
  },
});
