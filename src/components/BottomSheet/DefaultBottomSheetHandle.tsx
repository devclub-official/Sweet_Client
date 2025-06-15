import {colors} from '@/theme/colors';
import {BottomSheetHandle, BottomSheetHandleProps} from '@gorhom/bottom-sheet';

export const DefaultBottomSheetHandle = (
  handleProps: BottomSheetHandleProps,
) => (
  <BottomSheetHandle
    {...handleProps}
    indicatorStyle={{backgroundColor: colors.WHITE}}
  />
);
