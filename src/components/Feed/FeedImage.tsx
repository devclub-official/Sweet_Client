import { Image, StyleSheet, View } from "react-native";
import { Button } from "../Button";
import { Svg } from "../Svg";
import PagerView from "react-native-pager-view";
import { colors } from "@/theme/colors";
import { useState } from "react";

interface FeedImageProps {
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
            style={feedImageStyles.feedImage}
            source={{ uri: image }}
        />
        <Button
            style={feedImageStyles.moreButton}
            onPress={onPressMoreButton}
        >
            <Svg svgName="FeedDumbbell" />
        </Button>
    </View>
)

export const FeedImage = (props: FeedImageProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    return (
        <View>
            <PagerView
                style={feedImageStyles.rootView}
                initialPage={currentImageIndex}
                onPageScroll={(event) => { setCurrentImageIndex(event.nativeEvent.position) }}>
                {
                    props.images.map((image, index) => (
                        FeedImageItem(image, index, props.onPressMoreButton)
                    ))
                }
            </PagerView>
            {
                props.images.length === 1 ? null : <View style={feedImageStyles.indicator}>
                    {
                        props.images.map((_, index) => (
                            currentImageIndex === index ? <View key={index} style={feedImageStyles.currentIndicatorItem} /> : <View key={index} style={feedImageStyles.otherIndicatorItem} />
                        ))
                    }
                </View>
            }
        </View>
    );
};

const feedImageStyles = StyleSheet.create({
    rootView: {
        width: "100%",
        aspectRatio: 1 / 0.95,
        alignItems: "stretch",
    },
    feedImage: {
        position: "relative",
        flex: 1,
    },
    moreButton: {
        position: "absolute",
        bottom: 10,
        left: 10,
    },
    indicator: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        marginVertical: 8,
        gap: 5,
    },
    currentIndicatorItem: {
        width: 5,
        height: 5,
        borderRadius: 2.5,
        backgroundColor: colors.PRIMARY,
    },
    otherIndicatorItem: {
        width: 5,
        height: 5,
        borderRadius: 2.5,
        backgroundColor: "#D8D8D8",
    },
});