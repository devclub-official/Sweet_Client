import {Typo} from '@/components/Typo';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {forwardRef, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {BottomSheet} from '@/components/BottomSheet';
import {DefaultBottomSheetHandle} from '@/components/BottomSheet/DefaultBottomSheetHandle';
import {Button} from '@/components/Button';

interface Props {
  cities: string[];
  onCityChange: (city: string) => void;
  onStateChange?: (state: number) => void;
}

/**
 * TODO: 바텀시트 컨테이너와 컨텐츠를 분리
 * 공통으로 사용할 수 있는 바텀시트 컨테이너 컴포넌트 추가
 */

export const CitySelectModal = forwardRef<BottomSheetModal, Props>(
  ({cities, onStateChange, onCityChange}, ref) => {
    const [selectedCity, setSelectedCity] = useState('');

    return (
      <BottomSheet
        ref={ref}
        onChange={state => {
          onStateChange?.(state);
          if (state < 0) {
            setSelectedCity('');
          }
        }}
        handleComponent={DefaultBottomSheetHandle}>
        <View style={styles.wrapper}>
          <View style={styles.description}>
            <Typo font="Pre08M" color="WHITE">
              시&middot; 군 &middot; 구
            </Typo>
          </View>
          <FlatList
            data={cities}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={styles.cityButton}
                  onPress={() => {
                    setSelectedCity(item);
                  }}>
                  <Typo
                    color={selectedCity === item ? 'PRI' : 'CG15'}
                    font="Pre08M">
                    {item}
                  </Typo>
                </TouchableOpacity>
              );
            }}
          />
          {selectedCity && (
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => {
                  onCityChange(selectedCity);
                }}>
                완료
              </Button>
            </View>
          )}
        </View>
      </BottomSheet>
    );
  },
);

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },
  description: {
    alignItems: 'center',
  },
  cityButton: {
    paddingVertical: 10,
  },
  buttonWrapper: {
    marginTop: 10,
  },
});
