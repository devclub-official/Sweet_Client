import { colors } from "@/theme/colors";
import { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback } from "react";
import { StyleSheet } from "react-native";

export const useBottomSheetCallbacks = () => {
    const renderBackdrop = useCallback((backdropProps: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
            {...backdropProps}
            disappearsOnIndex={-1}
            appearsOnIndex={1}
            opacity={0.6}
        />
    ), []);

    const handlePresentModalPress = useCallback((bottomSheetRef: React.RefObject<BottomSheetModal | null>) => {
        if (bottomSheetRef.current) {
            bottomSheetRef.current.present();
        }
    }, []);

    return {
        renderBackdrop,
        handlePresentModalPress,
    };
}

export const commonBottomSheetStyles = StyleSheet.create({
    background: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: colors.GRAY_700,
    },
    handle: {
        backgroundColor: colors.GRAY_700,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    handleIndicator: {
        backgroundColor: "white",
    },
});