export interface CreateFeedDto {
  title: string;
  content: string;
  authorId: number;
  visibility: '비공개' | '일촌' | '공개';
  exerciseDetails: {
    duration: string;
    exerciseType: string[];
    location: string;
    tag: string;
  };
}

export interface CreateFeedResponseDto {
  id: number;
  title: string;
  authorId: number;
  imageUrls: string[];
  visibility: '비공개' | '일촌' | '공개';
  exerciseDetails: {
    duration: string;
    exerciseType: string[];
    location: string;
    tag: string;
  };
}
