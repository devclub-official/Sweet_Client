export interface GetFeedListDto {
    totalPages: number;
    totalElements: number;
    first: boolean;
    last: boolean;
    size: number;
    content: ContentDto[];
    number: number;
    sort: SortDto;
    numberOfElements: number;
    pageable: PageableDto;
    empty: boolean
}

export interface ContentDto {
    id: number;
    title: string;
    authorId: number;
    authorName: string;
    feedContent: string;
    authorProfileImageUrl: string;
    imageUrls: string[];
    visibility: '비공개' | '일촌' | '공개';
    likeCount: number;
    isLikedByCurrentUser: boolean;
    firstLikedUserName: string;
    commentCount: number;
    shareCount: number;
    createdAt: string;
    updatedAt: string;
}

interface SortDto {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
}

interface PageableDto {
    offset: number;
    sort: SortDto;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
}
