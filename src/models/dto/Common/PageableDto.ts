import { SortDto } from "./SortDto";

export interface PageableDto {
    offset: number;
    sort: SortDto;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
}
