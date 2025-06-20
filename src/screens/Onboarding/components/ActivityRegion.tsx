import {Typo} from '@/components/Typo';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {OnboardingContentWrapper} from './OnboardingContentWrapper';
import {OnboardingContentHeader} from './OnboardingContentHeader';
import {colors} from '@/theme/colors';
import {useContext, useRef, useState} from 'react';
import {OnboardingContext} from '../context/OnboardingContext';
import {REGIONS} from '../constants';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {Grid} from '@/components/Grid';
import {CitySelectModal} from './CitySelectModal';

export const ActivityRegion = () => {
  const context = useContext(OnboardingContext);
  const ref = useRef<BottomSheetModal>(null);
  const [cities, setCities] = useState<string[]>([]);
  const [province, city] = (context?.location || ' ').split(' ');
  const selectedProvince = useRef('');

  return (
    <OnboardingContentWrapper>
      <OnboardingContentHeader
        title={'주로 운동하시는\n지역을 선택해주세요.'}
        description="최대 3개까지 관심운동으로 설정할 수 있어요."
      />
      <View style={styles.wrapper}>
        <Grid
          style={styles.flatList}
          data={REGIONS}
          contentContainerStyle={styles.contentWrapper}
          keyExtractor={item => item.province}
          columnGap={16}
          rowGap={16}
          renderItem={(size, {item}) => {
            const isSelected = province === item.province;
            return (
              <TouchableOpacity
                style={[
                  styles.item,
                  {width: size},
                  isSelected && styles.selectedProvince,
                ]}
                onPress={() => {
                  selectedProvince.current = item.province;
                  setCities(item.cities);
                  ref.current?.present();
                }}>
                <Typo font="SubSmallM" style={styles.sportName} color="CG5">
                  {item.province}
                </Typo>
                {isSelected && (
                  <Typo font="SubSmallM" style={styles.sportName} color="CG5">
                    {city}
                  </Typo>
                )}
              </TouchableOpacity>
            );
          }}
          numColumns={4}
        />
      </View>
      <CitySelectModal
        ref={ref}
        cities={cities}
        onCityChange={selectedCity => {
          context?.onChange(
            'location',
            `${selectedProvince.current} ${selectedCity}`,
          );
          ref.current?.dismiss();
        }}
      />
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
    backgroundColor: colors.B_700,
    borderRadius: 10,
    alignItems: 'center',
    aspectRatio: 1,
    justifyContent: 'center',
  },
  contentWrapper: {
    paddingTop: 16,
    paddingBottom: 60,
    gap: 16,
  },
  sportName: {
    marginTop: 8,
  },
  selectedProvince: {
    borderWidth: 1,
    borderColor: colors.PRI,
  },
});
