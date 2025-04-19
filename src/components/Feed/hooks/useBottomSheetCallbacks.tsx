import { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetHandle, BottomSheetHandleProps, BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback } from "react";
import { Typo } from "../../Typo";
import { commonBottomSheetStyles } from "../styles/commonBottomSheetStyles";

export const useBottomSheetCallbacks = () => {
    const renderBackdrop = useCallback((backdropProps: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
            {...backdropProps}
            disappearsOnIndex={-1}
            appearsOnIndex={1}
            opacity={0.6}
        />
    ), []);

    const renderHandle = useCallback((handleProps: BottomSheetHandleProps, title: string) => (
        <BottomSheetHandle {...handleProps}>
            <Typo style={commonBottomSheetStyles.handleTypo}>{title}</Typo>
        </BottomSheetHandle>
    ), []);

    const handlePresentModalPress = useCallback((bottomSheetRef: React.RefObject<BottomSheetModal | null>) => {
        if (bottomSheetRef.current) {
            bottomSheetRef.current.present();
        }
    }, []);

    return {
        renderBackdrop,
        renderHandle,
        handlePresentModalPress,
    };
};
