import Config from "react-native-config";
import { FeedSummary } from "../domain/Feed/FeedSummary";
import { ContentDto } from "../dto/Feed/GetFeedListDto";

const formatToFeedDate = (feedDate: string): string => {
    const date = new Date(feedDate);
    const formatted = date.toLocaleDateString(
        'en-US',
        {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }
    );
    const parts = formatted.split(' ');

    return `${parts[2]} ${parts[0]} ${parts[1].replace(',', '')}`;
};

export const contentDtoToDomain = (dto: ContentDto[]): FeedSummary[] => {
    return dto.map((item: ContentDto): FeedSummary => ({
        id: item.id.toString(),
        title: item.title,
        authorId: item.authorId,
        authorName: item.authorName,
        profileImage: `${Config.API_ORIGIN}${item.authorProfileImageUrl}`,
        feedContent: item.feedContent,
        imageUrls: item.imageUrls.map((image: string) => `${Config.API_ORIGIN}${image}`),
        date: formatToFeedDate(item.createdAt),
        isLiked: item.isLikedByCurrentUser,
        likeCnt: item.likeCount,
        commentCnt: item.commentCount,
        likeUserName: item.firstLikedUserName,
    }));
};
