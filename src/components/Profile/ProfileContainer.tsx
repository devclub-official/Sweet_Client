import { ProfileInfo } from "@/models/domain/Profile/ProfileInfo";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { Button } from "../Button";
import { ProfileType } from "@/models/domain/Profile/ProfileType";
import { strings as stringsInProfile } from "./constants/strings";
import { strings } from "@/constants/strings";
import { Typo } from "../Typo";
import { StatItem } from "./StatItem";
import { colors } from "@/theme/colors";
import { Fire } from "@/assets/svgs/Fire";
import { Calendar } from "@/assets/svgs/Calendar";
import { FeedInProfile } from "@/models/domain/Profile/FeedInProfile";
import { Dumbbell } from "@/assets/svgs/Dumbbell";

interface ProfileContainerProps {
    userId: String;
    isMyPage: boolean;
}

const renderButtonByProfileType = (type: ProfileType) => {
    switch (type) {
        case 'SELF':
            return <Button type="black" size="medium" fill={false}>{stringsInProfile.UPDATE_PROFILE}</Button>;
        case 'FOLLOWING':
            return <Button type="black" size="medium" fill={false}>{strings.FOLLOWING}</Button>;
        case 'NOT_FOLLOWING':
            return <Button type="primary" size="medium" fill={false}>{strings.FOLLOW}</Button>;
    }
};

const renderFeedItem = ({ item }: { item: FeedInProfile }) => (
    <Image
        style={styles.feedItemImage}
        source={{
            uri: item.feedThumbnail,
        }}
    />
);

export const ProfileContainer = ({ userId, isMyPage }: ProfileContainerProps) => {
    const profile: ProfileInfo = {
        id: "",
        type: 'SELF',
        nickname: 'pt_jiyeon',
        profileImage: 'https://plus.unsplash.com/premium_photo-1672784159872-32eb1f00ef45?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        introduce: '반가워요 :)',
        feedCount: '5',
        followerCount: '1,568',
        followingCount: '12',
        isOnWorkoutStreak: true,
        workoutStatusMessage: '연속 5일 운동 기록 중',
        favoriteWorkout: '나의 최애 운동은 ? [필라테스]',
        feeds: [
            {
                feedId: 1,
                feedThumbnail: 'https://images.unsplash.com/photo-1591258370814-01609b341790?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                feedId: 2,
                feedThumbnail: 'https://images.unsplash.com/photo-1641913640860-ab4c2bfb2bb0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                feedId: 3,
                feedThumbnail: 'https://images.unsplash.com/photo-1717500252573-d31d4bf5ddf1?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                feedId: 4,
                feedThumbnail: 'https://images.unsplash.com/photo-1717500250573-a76fce75ffb3?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                feedId: 5,
                feedThumbnail: 'https://images.unsplash.com/photo-1717500252179-2811af29e4f7?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        ],
    };

    return (
        <FlatList
            data={profile.feeds}
            renderItem={renderFeedItem}
            keyExtractor={(item) => item.feedId.toString()}
            numColumns={3}
            ListHeaderComponent={
                <>
                    <View style={styles.profileContainer}>
                        <View style={styles.profileImageAndStatsContainer}>
                            <Image
                                style={styles.profileImage}
                                source={{
                                    uri: profile.profileImage,
                                }}
                            />
                            <View style={styles.statsContainer}>
                                <StatItem stat={profile.feedCount} statName={strings.FEED} />
                                <StatItem stat={profile.followerCount} statName={strings.FOLLOWER} />
                                <StatItem stat={profile.followingCount} statName={strings.FOLLOWING} />
                            </View>
                        </View>
                        <Typo color="CG1" font="SubSmallM">{profile.nickname}</Typo>
                        <Typo color="CG1" font="CaptionR" style={styles.introduceTypo}>{profile.introduce}</Typo>
                        {renderButtonByProfileType(profile.type)}
                    </View>
                    <View style={styles.workoutSummaryContainer}>
                        <View style={styles.workoutSummaryTypoContainer}>
                            {profile.isOnWorkoutStreak ? <Fire /> : <Calendar />}
                            <Typo color="CG10" font="Pre03M">{profile.workoutStatusMessage}</Typo>
                        </View>
                        <View style={styles.workoutSummaryTypoContainer}>
                            <Dumbbell width="14" height="14" color={colors.B_50} fill={colors.B_50} />
                            <Typo color="CG10" font="Pre03M">{profile.favoriteWorkout}</Typo>
                        </View>
                    </View>
                </>
            }
        />
    );
};

const styles = StyleSheet.create({
    profileContainer: {
        paddingHorizontal: 20,
    },
    profileImageAndStatsContainer: {
        marginBottom: 8,
        flexDirection: 'row',
        gap: 30,
    },
    profileImage: {
        width: 96,
        height: 96,
        borderRadius: 100,
    },
    statsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    introduceTypo: {
        marginBottom: 20,
    },
    workoutSummaryContainer: {
        marginTop: 16,
        gap: 8,
        backgroundColor: colors.B_700,
        padding: 10,
    },
    workoutSummaryTypoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    feedItemImage: {
        margin: 1,
        width: '33.3%',
        aspectRatio: 1,
    },
});
