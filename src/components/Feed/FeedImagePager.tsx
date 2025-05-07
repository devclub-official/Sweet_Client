//피드 컴포넌트 중 피드 이미지 페이저 영역입니다.

import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Svg } from "../Svg";
import PagerView from "react-native-pager-view";
import { colors } from "@/theme/colors";
import { useState } from "react";

interface FeedImagePagerProps {
    images: string[];
    onPressMoreButton: () => void;
}

const FeedImageItem = (
    image: string,
    index: number,
    onPressMoreButton: () => void,
) => (
    <View key={index}>
        <Image
            style={styles.feedImage}
            source={{ uri: image }}
        />
        <TouchableOpacity
            style={styles.moreButton}
            onPress={onPressMoreButton}
        >
            <Svg svgName="FeedDumbbell" />
        </TouchableOpacity>
    </View>
)

export const FeedImagePager = ({ images, onPressMoreButton }: FeedImagePagerProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    return (
        <View>
            <PagerView
                style={images.length === 1 ? styles.rootContainerSingleImage : styles.rootContainerMultipleImages}
                initialPage={currentImageIndex}
                onPageScroll={(event) => {
                    setCurrentImageIndex(event.nativeEvent.position);
                }}>
                {
                    images.map((image, index) => (
                        FeedImageItem(image, index, onPressMoreButton)
                    ))
                }
            </PagerView>
            {
                images.length === 1 ? null : <View style={styles.indicatorContainer}>
                    {
                        images.map((_, index) => (
                            currentImageIndex === index ? <View key={index} style={styles.currentIndicatorItem} /> : <View key={index} style={styles.otherIndicatorItem} />
                        ))
                    }
                </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    rootContainerSingleImage: {
        width: '100%',
        aspectRatio: 1 / 0.95,
        alignItems: 'stretch',
        marginBottom: 16,
    },
    rootContainerMultipleImages: {
        width: '100%',
        aspectRatio: 1 / 0.95,
        alignItems: 'stretch',
    },
    feedImage: {
        position: 'relative',
        flex: 1,
    },
    moreButton: {
        position: 'absolute',
        bottom: 10,
        left: 10,
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 8,
        gap: 5,
        paddingVertical: 4,
        paddingHorizontal: 10,
    },
    currentIndicatorItem: {
        width: 5,
        height: 5,
        borderRadius: 2.5,
        backgroundColor: colors.PRI,
    },
    otherIndicatorItem: {
        width: 5,
        height: 5,
        borderRadius: 2.5,
        backgroundColor: '#D8D8D8',
    },
});
