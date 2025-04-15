import { BottomSheetFlatList, BottomSheetHandleProps, BottomSheetModal } from "@gorhom/bottom-sheet";
import { useMemo } from "react"
import { commonBottomSheetStyles, useBottomSheetCallbacks } from "./bottomSheet";
import { StyleSheet, View } from "react-native";
import { Strings } from "./constants/strings";
import { Exercise } from "@/models/feed";
import { colors } from "@/theme/colors";
import LinearGradient from "react-native-linear-gradient";
import { Typo } from "../Typo";

interface ExerciseBottomSheetProps {
    bottomSheetRef: React.RefObject<BottomSheetModal | null>;
    exercises: Exercise[];
}

const renderItem = (item: Exercise, isLast: boolean) => (
    <View style={isLast ? styles.lastItemView : styles.itemView}>
        <Typo style={styles.exerciseNameTypo}>{item.exerciseName}</Typo>
        <Typo style={styles.exerciseInfoTypo}>{item.exerciseInfo}</Typo>
    </View>
);

export const ExerciseBottomSheet = (props: ExerciseBottomSheetProps) => {
    //variables
    const snapPoints = useMemo(() => ["54%", "90%"], []);

    //renders
    const { renderBackdrop, renderHandle } = useBottomSheetCallbacks();

    return (
        <BottomSheetModal
            ref={props.bottomSheetRef}
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
                style={styles.container}>
                <BottomSheetFlatList
                    data={props.exercises}
                    renderItem={({ item, index }) => renderItem(item, index === props.exercises.length - 1)}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{
                        padding: 16,
                    }} />
            </LinearGradient>


        </BottomSheetModal>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginHorizontal: 20,
        marginBottom: 122,
        borderRadius: 20,
    },
    itemView: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: colors.GRAY_50,
    },
    lastItemView: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
        paddingVertical: 8,
    },
    exerciseNameTypo: {
        color: colors.GRAY_700,
    },
    exerciseInfoTypo: {
        color: colors.GRAY_700,
    },
});