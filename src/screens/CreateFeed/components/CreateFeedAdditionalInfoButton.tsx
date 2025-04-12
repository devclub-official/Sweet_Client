import {Button} from '@/components/Button';
import {Svg} from '@/components/Svg';
import {Typo} from '@/components/Typo';
import {colors} from '@/theme/colors';
import {SvgNames} from '@/types/svg';
import {StyleSheet, View} from 'react-native';

export interface CreateFeedAdditionalInfoButtonProps {
  title: string;
  description?: string;
  svgName: SvgNames;
  onPress: () => void;
}

export const CreateFeedAdditionalInfoButton = ({
  title,
  description,
  svgName,
  onPress,
}: CreateFeedAdditionalInfoButtonProps) => {
  return (
    <Button onPress={onPress}>
      <View style={styles.wrapper}>
        <View style={styles.left}>
          <Svg svgName={svgName} options={{width: '24', height: '24'}} />
          <Typo>{title}</Typo>
        </View>
        <View style={styles.right}>
          <Typo>{description}</Typo>
          <Svg svgName="ChevronRight" />
        </View>
      </View>
    </Button>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: colors.GRAY_700,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
