import { Image, StyleSheet, View, ViewStyle } from "react-native";
import { Typo } from "../Typo";

interface ProfileProps {
    style?: ViewStyle;
    profileImage: string;
    author: string;
    date: string;
    rightComponent: () => React.ReactNode;
}

export const Profile = (props: ProfileProps) => {
    return (
        <View style={[profileStyles.rootView, props.style]}>
            <View style={profileStyles.profileRow}>
                <Image
                    style={profileStyles.profileImage}
                    source={{
                        uri: props.profileImage,
                    }}
                />
                <View style={profileStyles.profileColumn}>
                    <Typo style={profileStyles.nicknameText}>{props.author}</Typo>
                    <Typo style={profileStyles.dateText}>{props.date}</Typo>
                </View>
            </View>
            {props.rightComponent()}
        </View>
    );
};

const profileStyles = StyleSheet.create({
    rootView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
        paddingHorizontal: 12,
        paddingVertical: 9.5,
    },
    profileRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 9,
    },
    profileColumn: {
        flexDirection: "column",
        gap: 1,
    },
    profileImage: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    nicknameText: {
        color: "#F9F9F9",
    },
    dateText: {
        color: "#F9F9F9",
    },
});

