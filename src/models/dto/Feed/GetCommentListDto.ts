import { PageableDto } from "../Common/PageableDto";
import { SortDto } from "../Common/SortDto";

export interface GetCommentListDto {
    totalPages: number;
    totalElements: number;
    first: boolean;
    last: boolean;
    size: number;
    content: CommentDto[];
    number: number;
    sort: SortDto;
    pageable: PageableDto;
    numberOfElements: number;
    empty: boolean;
}

export interface CommentDto {
    commentId: number;
    userId: number;
    userName: string;
    profileImageUrl: string;
    text: string;
    createdAt: string;
}
