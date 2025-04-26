import { GetFeedListDto } from "@/models/dto/Feed/GetFeedListDto";
import { api } from "./common";

export const fetchFeedListAPI = (page: number, type: 'FOLLOWING' | 'UNFOLLOWED'): Promise<GetFeedListDto> =>  api.get<GetFeedListDto>({
    url: '/api/feeds',
    param: {
        page: page,
        type: type,
    },
});
