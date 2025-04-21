import {Svg} from '@/components/Svg';
import {Typo} from '@/components/Typo';
import {colors} from '@/theme/colors';
import {SvgNames} from '@/types/svg';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

export interface CreateFeedAdditionalInfoButtonProps {
  title: string;
  description?: string;
  svgName: SvgNames;
  onPress: () => void;
}

// TODO: CG1 #FFFFFF로 수정
export const CreateFeedAdditionalInfoButton = ({
  title,
  description,
  svgName,
  onPress,
}: CreateFeedAdditionalInfoButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrapper}>
        <View style={styles.left}>
          <Svg svgName={svgName} options={{width: '24', height: '24'}} />
          <Typo color="CG1">{title}</Typo>
        </View>
        <View style={styles.right}>
          <Typo color="CG1">{description}</Typo>
          <Svg svgName="ChevronRight" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: colors.B_700,
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
