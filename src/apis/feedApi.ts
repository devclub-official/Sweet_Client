import { GetFeedListDto } from "@/models/dto/Feed/GetFeedListDto";
import { api } from "./common";
import { GetFeedDetailDto } from "@/models/dto/Feed/GetFeedDetailDto";

export const fetchFeedListAPI = (page: number, type: 'FOLLOWING' | 'UNFOLLOWED'): Promise<GetFeedListDto> =>  api.get<GetFeedListDto>({
    url: '/api/feeds',
    param: {
        page: page,
        type: type,
    },
});

export const fetchFeedDetailAPI = (id: number): Promise<GetFeedDetailDto> => api.get<GetFeedDetailDto>({
    url: `/api/feeds/${id}`,
});
