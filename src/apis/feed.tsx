import {
  CreateFeedDto,
  CreateFeedResponseDto,
} from '@/models/dto/Feed/CreateFeedDto';
import {api} from './common';
import Config from 'react-native-config';

export const createFeed = async (body: CreateFeedDto) => {
  const res = await api.post<CreateFeedResponseDto>({
    url: `${Config.MAIN_API_ORIGIN}/api/feeds`,
    body,
  });
  return res;
};

export const uploadFeedImage = async (feedId: number, body: FormData) => {
  const res = await api.post<CreateFeedResponseDto>({
    url: `${Config.MAIN_API_ORIGIN}/api/feeds/${feedId}/images`,
    body,
    isMultipart: true,
  });
  return res;
};
