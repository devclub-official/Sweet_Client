import { BottomSheetFlatList, BottomSheetHandleProps, BottomSheetModal } from "@gorhom/bottom-sheet";
import { useMemo } from "react"
import { StyleSheet, View } from "react-native";
import { Strings } from "./constants/strings";
import { colors } from "@/theme/colors";
import { Typo } from "../Typo";
import { Exercise } from "@/models/domain/Feed/exercise";
import { useBottomSheetCallbacks } from "./hooks/useBottomSheetCallbacks";
import { commonBottomSheetStyles } from "./styles/commonBottomSheetStyles";
import LinearGradient from "react-native-linear-gradient";

interface ExerciseBottomSheetProps {
    bottomSheetRef: React.RefObject<BottomSheetModal | null>;
    exercises: Exercise[];
}

const renderItem = (item: Exercise, isLast: boolean) => (
    <View style={isLast ? styles.lastItemView : styles.itemView}>
        <Typo color="B_700">{item.exerciseName}</Typo>
        <Typo color="B_700" font="SubSmallM">{item.exerciseInfo}</Typo>
    </View>
);

export const ExerciseBottomSheet = ({ bottomSheetRef, exercises }: ExerciseBottomSheetProps) => {
    //variables
    const snapPoints = useMemo(() => ['54%', '90%'], []);

    //renders
    const { renderBackdrop, renderHandle } = useBottomSheetCallbacks();

    return (
        <BottomSheetModal
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            enableDynamicSizing={false}
            backgroundStyle={commonBottomSheetStyles.background}
            handleStyle={commonBottomSheetStyles.handle}
            handleIndicatorStyle={commonBottomSheetStyles.handleIndicator}
            backdropComponent={renderBackdrop}
            handleComponent={(handleProps: BottomSheetHandleProps) => renderHandle(handleProps, Strings.TAGGED_EXERCISES)}>

            <LinearGradient
                colors={['rgba(242, 242, 242, 0.9)', 'rgba(224, 254, 251, 0.9)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                angle={107}
                useAngle={true}
                style={styles.linearGradientContainer}>
                <BottomSheetFlatList
                    data={exercises}
                    renderItem={({ item, index }) => renderItem(item, index === exercises.length - 1)}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.bottomSheetFlatListContainer} />
            </LinearGradient>
        </BottomSheetModal>
    );
};

const styles = StyleSheet.create({
    linearGradientContainer: {
        marginTop: 10,
        marginHorizontal: 20,
        marginBottom: 122,
        borderRadius: 20,
    },
    bottomSheetFlatListContainer: {
        padding: 16,
    },
    itemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: colors.B_50,
    },
    lastItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        paddingVertical: 8,
    },
});
