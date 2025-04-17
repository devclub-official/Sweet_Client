import { colors } from "@/theme/colors";
import { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetHandle, BottomSheetHandleProps, BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback } from "react";
import { StyleSheet } from "react-native";
import { Typo } from "../Typo";

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
}

export const commonBottomSheetStyles = StyleSheet.create({
    background: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: colors.B_700,
    },
    handle: {
        backgroundColor: colors.B_700,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    handleIndicator: {
        backgroundColor: colors.WHITE,
    },
    handleTypo: {
        marginTop: 8,
        marginBottom: 12.5,
        width: '100%',
        textAlign: 'center',
        color: colors.CG1,
    },
});