export interface UserInfo {
  email: string;
  id: number;
  profileImage: string;
  username: string;
  interestedSports?: string[] | null;
  bio: string;
}
