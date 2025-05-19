import {GetFeedListDto} from '@/models/dto/Feed/GetFeedListDto';
import {api} from './common';
import {GetFeedDetailDto} from '@/models/dto/Feed/GetFeedDetailDto';
import Config from 'react-native-config';

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
