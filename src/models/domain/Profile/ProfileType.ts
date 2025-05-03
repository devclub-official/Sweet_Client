const ProfileType = {
    SELF: 'SELF',
    FOLLOWING: 'FOLLOWING',
    NOT_FOLLOWING: 'NOT_FOLLOWING',
} as const;

export type ProfileType = keyof typeof ProfileType;
