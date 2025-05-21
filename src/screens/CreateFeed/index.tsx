import {SafeAreaScreenWrapper} from '@/components/SafeAreaScreenWrapper';
import {useMemo, useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
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
import {createFeed, uploadFeedImage} from '@/apis/feed';
import {imagePicker} from '@/libs/imagePicker';
import {Asset} from 'react-native-image-picker';
import {useUserStore} from '@/stores/useAuthStore';
import {SweetError} from '@/apis/error';

export const CreateFeed = () => {
  const {push, pop} = useSweetNavigation();
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const {user} = useUserStore();
  const [image, setImage] = useState<Asset>();
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
  const handleImageUploadPress = async () => {
    try {
      const images = await imagePicker.getImage({
        mediaType: 'photo',
        selectionLimit: 1,
      });
      setImage(images[0]);
    } catch (e) {
      console.log(e);
    }
  };

  const submit = async () => {
    if (!isSubmitLoading) {
      setIsSubmitLoading(true);
      try {
        const feed = await createFeed({
          title: '오늘의 운동',
          content: description,
          authorId: user?.id!,
          visibility: '공개',
          exerciseDetails: {
            duration: '30분',
            exerciseType: ['soccer'],
            location: '서울',
            tag: '축구',
          },
        });

        const formData = new FormData();
        formData.append('files', {
          url: image?.uri,
          name: image?.fileName,
          type: image?.type,
        });
        await uploadFeedImage(feed.id, formData);
        pop();
      } catch (e) {
        if (e instanceof SweetError) {
          Alert.alert(e.errorMessage);
        }
      } finally {
        setIsSubmitLoading(false);
      }
    }
  };

  return (
    <SafeAreaScreenWrapper>
      <ScrollView contentContainerStyle={styles.wrapper}>
        <TouchableOpacity onPress={handleImageUploadPress}>
          <View style={styles.imageWrapper}>
            {image && <Image source={image} style={styles.image} />}
          </View>
        </TouchableOpacity>
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
        <Button type="primary" onPress={submit}>
          업로드
        </Button>
      </View>
    </SafeAreaScreenWrapper>
  );
};
const IMAGE_RATIO = 0.949;
const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
  },
  imageWrapper: {
    aspectRatio: IMAGE_RATIO,
    backgroundColor: 'rgba(157,157,157,0.9)',
  },
  image: {
    width: '100%',
    height: '100%',
  },

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
