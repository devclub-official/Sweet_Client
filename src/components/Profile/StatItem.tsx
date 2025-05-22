import { StyleSheet, View } from "react-native";
import { Typo } from "../Typo";

interface StatItemProps {
    stat: string;
    statName: string;
}

export const StatItem = ({ stat, statName }: StatItemProps) => (
    <View>
        <Typo color="CG1" font="SubMediumB" style={styles.statTypo}>{stat}</Typo>
        <Typo color="CG1" font="BodySmallR" style={styles.statNameTypo}>{statName}</Typo>
    </View>
);

const styles = StyleSheet.create({
    statTypo: {
        textAlign: 'center',
    },
    statNameTypo: {
        textAlign: 'center',
    },
});
