import { FeedSummary } from "@/models/domain/Feed/FeedSummary";
import { FlatList, StyleSheet, View } from "react-native";
import { useFeedList } from "../hooks/useFeedList";
import { FollowStatus } from "@/models/domain/Feed/FollowStatus";
import { FeedItem } from "./FeedItem";
import { useRef, useState } from "react";
import { CommentBottomSheet } from "@/components/Feed/CommentBottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

interface FeedFlatListProps {
    followStatus: FollowStatus;
}

export const FeedFlatList = ({ followStatus }: FeedFlatListProps) => {
    const { feeds, getFeedList } = useFeedList();
    const commentBottomSheetModalRef = useRef<BottomSheetModal>(null);
    const [selectedFeed, setSelectedFeed] = useState<FeedSummary | null>(null);
    const renderItemSeparator = () => (<View style={styles.separator} />);

    return (
        <>
            <FlatList
                data={feeds}
                renderItem={({ item }: { item: FeedSummary }) => (
                    <FeedItem
                        feed={item}
                        followStatus={followStatus}
                        onPressComment={(feed: FeedSummary) => {
                            setSelectedFeed(feed);
                            commentBottomSheetModalRef.current?.present();
                        }}
                    />
                )}
                keyExtractor={(item) => item.id}
                onEndReached={() => {
                    getFeedList(followStatus);
                }}
                contentContainerStyle={styles.rootContainer}
                ItemSeparatorComponent={renderItemSeparator}
            />

            <CommentBottomSheet
                bottomSheetRef={commentBottomSheetModalRef}
                feedId={selectedFeed?.id || ''}
                profileImage={selectedFeed?.profileImage || ''}
                feedAuthor={selectedFeed?.authorName || ''} />
        </>
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
