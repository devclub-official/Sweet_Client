//피드 컴포넌트 중 프로필 영역입니다.

import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Typo } from "../Typo";
import { navigation } from "@/utils/navigation";
import { RootStackParamList, RootStackScreenList } from "@/types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useSweetNavigation } from "@/hooks/useNavigation";

interface FeedProfileProps {
    authorId: number;
    profileImage: string;
    author: string;
    date: string;
    rightComponent: () => React.ReactNode;
}

export const FeedProfile = (
    { authorId, profileImage, author, date, rightComponent }: FeedProfileProps,
) => {
    const navigation = useSweetNavigation();

    return (
        <View style={styles.rootContainer}>
            <TouchableOpacity onPress={() => {
                navigation.push(
                    RootStackScreenList.Profile,
                    {
                        userId: authorId,
                    }
                )
            }}>
                <Image
                    style={styles.profileImage}
                    source={{
                        uri: profileImage,
                    }}
                />
            </TouchableOpacity>
            <View style={styles.authorAndDateContainer}>
                <Typo color="CG1" font="ButtonSmallM">{author}</Typo>
                <Typo color="CG1">{date}</Typo>
            </View>
            {rightComponent()}
        </View>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        marginVertical: 9.5,
        marginHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    authorAndDateContainer: {
        flexDirection: 'column',
        flex: 1,
        marginHorizontal: 9,
        gap: 1,
    },
});
