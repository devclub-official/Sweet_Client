import {BottomModal} from '@/components/BottomSheet';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {forwardRef} from 'react';
import {View} from 'react-native';

interface Props {
  onStateChange: (state: number) => void;
}
export const ActivityCityModal = forwardRef<BottomSheetModal, Props>(
  ({onStateChange}, ref) => {
    return (
      <BottomModal ref={ref} onChange={onStateChange}>
        <View />
      </BottomModal>
    );
  },
);
