import {ReactElement, useCallback, useEffect, useRef, useState} from 'react';
import {
  FlatList,
  FlatListProps,
  LayoutRectangle,
  ListRenderItemInfo,
  StyleSheet,
} from 'react-native';

interface Props<T> extends Omit<FlatListProps<T>, 'renderItem'> {
  rowGap?: number;
  columnGap?: number;
  renderItem: (itemSize: number, info: ListRenderItemInfo<T>) => ReactElement;
}
export const Grid = <T,>({
  renderItem,
  rowGap = 0,
  columnGap = 0,
  numColumns,
  columnWrapperStyle,
  contentContainerStyle,
  ...rest
}: Props<T>) => {
  const containerLayout = useRef<LayoutRectangle>(null);
  const [itemSize, setItemSize] = useState<number>();

  const getItemSize = useCallback(
    (containerSize: number, columnCount: number, gap: number) => {
      const spacingCount = columnCount ? columnCount - 1 : 0;

      const itemWidth =
        (containerSize - spacingCount * gap) / (columnCount || 0);

      return itemWidth;
    },
    [],
  );

  useEffect(() => {
    if (containerLayout.current) {
      const size = getItemSize(
        containerLayout.current.width,
        numColumns || 0,
        rowGap,
      );

      setItemSize(size);
    }
  }, [numColumns, rowGap, getItemSize]);

  return (
    <FlatList
      {...rest}
      onLayout={e => {
        containerLayout.current = e.nativeEvent.layout;
        const size = getItemSize(
          containerLayout.current.width,
          numColumns || 0,
          rowGap,
        );

        setItemSize(size);
      }}
      contentContainerStyle={contentContainerStyle}
      columnWrapperStyle={[
        styles.columnWrapper,
        columnWrapperStyle,
        {gap: columnGap},
      ]}
      renderItem={props => {
        if (itemSize) {
          return renderItem(itemSize, props);
        }
        return null;
      }}
      numColumns={numColumns}
    />
  );
};

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'space-between',
  },
});
