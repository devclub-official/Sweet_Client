import {GetFeedListDto} from '@/models/dto/Feed/GetFeedListDto';
import {api} from './common';
import {GetFeedDetailDto} from '@/models/dto/Feed/GetFeedDetailDto';
import Config from 'react-native-config';
import { GetCommentListDto } from '@/models/dto/Feed/GetCommentListDto';

export const fetchFeedListAPI = (
  page: number,
  type: 'FOLLOWING' | 'UNFOLLOWED',
): Promise<GetFeedListDto> =>
  api.get<GetFeedListDto>({
    url: `${Config.MAIN_API_ORIGIN}/api/feeds`,
    param: {
      page: page,
      type: type,
    },
  });

export const fetchFeedDetailAPI = (id: number): Promise<GetFeedDetailDto> =>
  api.get<GetFeedDetailDto>({
    url: `${Config.MAIN_API_ORIGIN}/api/feeds/${id}`,
  });

export const fetchFeedCommentListAPI = (
  page: number,
  id: number,
): Promise<GetCommentListDto> => api.get<GetCommentListDto>({
  url: `${Config.MAIN_API_ORIGIN}/api/feeds/${id}/comments`,
  param: {
    page: page,
  },
});
