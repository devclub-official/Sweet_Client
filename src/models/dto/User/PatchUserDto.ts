export interface PatchUserDto {
    nickname?: string | null;
    bio?: string | null;
}

export interface PatchUserResponseDto {
    id: number;
    nickname: string;
    email: string;
    profileImage: string;
    bio: string;
}
