import {SafeAreaScreenWrapper} from '@/components/SafeAreaScreenWrapper';
import {useMemo, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  CreateFeedAdditionalInfoButton,
  CreateFeedAdditionalInfoButtonProps,
} from './components/CreateFeedAdditionalInfoButton';
import {useSweetNavigation} from '@/hooks/useNavigation';
import {RootStackScreenList} from '@/types/navigation';
import {Divider} from '@/components/Divider';
import {Button} from '@/components/Button';
import {Typo} from '@/components/Typo';
import {CreateFeedOption} from './components/CreateFeedOption';
import {CreateFeedTextArea} from './components/CreateFeedTextArea';
import {createFeed} from '@/apis/feed';

export const CreateFeed = () => {
  const {push} = useSweetNavigation();
  const [description, setDescription] = useState('');
  const [options, setOptions] = useState({
    like: false,
    comment: false,
  });

  const additionalOptions: CreateFeedAdditionalInfoButtonProps[] = useMemo(
    () => [
      {
        svgName: 'Dumbbell',
        title: '운동 기록',
        onPress: () => {
          push(RootStackScreenList.Login);
        },
      },
      {
        svgName: 'Location',
        title: '위치 추가',
        onPress: () => {
          push(RootStackScreenList.Login);
        },
      },
      {
        svgName: 'Eye',
        title: '공개 범위',
        onPress: () => {
          push(RootStackScreenList.Login);
        },
      },
    ],
    [push],
  );
  const feedOptions = useMemo(() => {
    return [
      {
        title: '좋아요 수 숨기기',
        key: 'like',
      },
      {
        title: '댓글 기능 해제',
        key: 'comment',
      },
    ] as const;
  }, []);

  return (
    <SafeAreaScreenWrapper>
      <ScrollView contentContainerStyle={styles.wrapper}>
        <View style={styles.image} />
        <CreateFeedTextArea
          value={description}
          placeholder="오늘의 운동을 공유해주세요!"
          onChange={text => setDescription(text)}
        />
        <View style={styles.additionalOptionWrapper}>
          {additionalOptions.map(({title, onPress, svgName}) => {
            return (
              <CreateFeedAdditionalInfoButton
                key={title}
                title={title}
                svgName={svgName}
                onPress={onPress}
              />
            );
          })}
        </View>
        <Divider />
        <View style={styles.optionWrapper}>
          <View style={styles.optionTitle}>
            <Typo>게시물 옵션</Typo>
          </View>
          {feedOptions.map(({key, title}) => {
            return (
              <CreateFeedOption
                key={key}
                title={title}
                value={options[key]}
                onTogglePress={() => {
                  setOptions(prev => ({...prev, [key]: !prev[key]}));
                }}
              />
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.uploadButtonWrapper}>
        <Button
          type="primary"
          onPress={() => {
            console.log('good ==>');
            try {
              createFeed();
            } catch (e) {
              console.log(e);
            }
          }}>
          업로드
        </Button>
      </View>
    </SafeAreaScreenWrapper>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
  },
  image: {height: 300, backgroundColor: 'rgba(157,157,157,0.9)'},

  additionalOptionWrapper: {
    gap: 8,
    paddingVertical: 8,
  },
  uploadButtonWrapper: {
    padding: 10,
  },
  optionTitle: {
    paddingVertical: 8,
    marginBottom: 10,
  },
  optionWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});
