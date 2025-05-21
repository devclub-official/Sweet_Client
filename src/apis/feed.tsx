import {
  CreateFeedDto,
  CreateFeedResponseDto,
} from '@/models/dto/Feed/CreateFeedDto';
import {api} from './common';

export const createFeed = async (body: CreateFeedDto) => {
  const res = await api.post<CreateFeedResponseDto>({
    url: 'https://fair-termite-promptly.ngrok-free.app/api/feeds',
    body,
  });
  return res;
};

export const uploadFeedImage = async (feedId: number, body: FormData) => {
  const res = await api.post<CreateFeedResponseDto>({
    url: `https://fair-termite-promptly.ngrok-free.app/api/feeds/${feedId}/images`,
    body,
    headers: {'Content-Type': 'multipart/form-data'},
  });
  return res;
};
