import {RootStackScreenList} from '@/types/navigation';

export const screenTitle: Record<RootStackScreenList, string> = {
  [RootStackScreenList.CreateFeed]: '업로드',
  [RootStackScreenList.MainTab]: '',
  [RootStackScreenList.HomeTab]: '',
  [RootStackScreenList.FeedTab]: '',
  [RootStackScreenList.MyPageTab]: '',
  [RootStackScreenList.Home]: '',
  [RootStackScreenList.Login]: '',
  [RootStackScreenList.FeedList]: '',
  [RootStackScreenList.FeedDetail]: '',
  [RootStackScreenList.MyPage]: '',
  [RootStackScreenList.Onboard]: '',
  [RootStackScreenList.Setting]: '설정 및 개인정보 관리',
  [RootStackScreenList.EditProfile]: '프로필 편집',
  [RootStackScreenList.TermsOfService]: '이용약관',
  [RootStackScreenList.Withdraw]: '회원탈퇴',
  [RootStackScreenList.WithdrawReason]: '',
  [RootStackScreenList.WithdrawWarning]: '',
};
