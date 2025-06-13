import {Typo} from '@/components/Typo';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {OnboardingContentWrapper} from './OnboardingContentWrapper';
import {OnboardingContentHeader} from './OnboardingContentHeader';
import {colors} from '@/theme/colors';
import {useContext, useRef} from 'react';
import {OnboardingContext} from '../context/OnboardingContext';
import {REGIONS} from '../constants';
import {PermissionBottomSheet} from './PermissionBottomSheet';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {Grid} from '@/components/Grid';

export const ActivityRegion = () => {
  const context = useContext(OnboardingContext);
  const ref = useRef<BottomSheetModal>(null);
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
            return (
              <TouchableOpacity
                style={[styles.item, {width: size}]}
                onPress={() => {
                  context?.onChange('interestSport', item.province);
                }}>
                <Typo font="SubSmallM" style={styles.sportName} color="CG5">
                  {item.province}
                </Typo>
              </TouchableOpacity>
            );
          }}
          numColumns={4}
        />
      </View>
      <PermissionBottomSheet
        ref={ref}
        onStateChange={state => console.log('state ==>', state)}
        onConfirmPress={() => {
          ref.current?.close();
        }}
        onSkipPress={() => {
          ref.current?.close();
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
});
