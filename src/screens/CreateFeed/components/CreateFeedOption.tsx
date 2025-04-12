import {Switch} from '@/components/Switch';
import {Typo} from '@/components/Typo';
import {StyleSheet, View} from 'react-native';

interface CreateFeedOptionProps {
  title: string;
  value: boolean;
  onTogglePress: () => void;
}

export const CreateFeedOption = ({
  title,
  value,
  onTogglePress,
}: CreateFeedOptionProps) => {
  return (
    <View style={styles.wrapper}>
      <Typo>{title}</Typo>
      <Switch value={value} onPress={onTogglePress} />
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
