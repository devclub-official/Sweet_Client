import { FeedSummary } from "@/models/domain/Feed/FeedSummary";
import { FlatList, StyleSheet, View } from "react-native";
import { useFeedList } from "../hooks/useFeedList";
import { FollowStatus } from "@/models/domain/Feed/FollowStatus";
import { FeedItem } from "./FeedItem";

interface FeedFlatListProps {
    followStatus: FollowStatus;
}

export const FeedFlatList = ({ followStatus }: FeedFlatListProps) => {
    const { feeds, getFeedList } = useFeedList();
    const renderItemSeparator = () => (<View style={styles.separator} />);

    return (
        <FlatList
            data={feeds}
            renderItem={({ item }: { item: FeedSummary }) => (
                <FeedItem feed={item} followStatus={followStatus} />
            )}
            keyExtractor={(item) => item.id}
            onEndReached={() => {
                getFeedList(followStatus);
            }}
            contentContainerStyle={styles.rootContainer}
            ItemSeparatorComponent={renderItemSeparator}
        />
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        paddingHorizontal: 11.5,
        paddingTop: 16,
        paddingBottom: 80,
    },
    separator: {
        height: 10,
    },
});
