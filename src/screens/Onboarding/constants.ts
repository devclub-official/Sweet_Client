import {SvgNames} from '@/types/svg';

export const PERMISSION_LIST: Array<{
  svg: SvgNames;
  name: string;
  description: string;
}> = [
  {
    svg: 'LightBell',
    name: '알림',
    description: '서비스 이용시 알림 제공',
  },
  {
    svg: 'LightLocation',
    name: '위치',
    description: '모임 및 배틀 인증시 위치 정보 제공',
  },
  {
    svg: 'LightCamera',
    name: '카메라',
    description: '게시글 작성시 사진첨부',
  },
  {
    svg: 'LightImage',
    name: '사진',
    description: '이미지 저장 및 게시글 작성 시 사진첨부',
  },
];

export const INTEREST_SPORTS_ITEM_LIST: Array<{
  svg: SvgNames;
  name: string;
  value: string;
}> = [
  {
    svg: 'OnboardingWeight',
    name: '웨이트',
    value: '웨이트',
  },
  {
    svg: 'OnboardingTreadmill',
    name: '실내 유산소',
    value: '실내 유산소',
  },
  {
    svg: 'OnboardingClimbing',
    name: '클라이밍',
    value: '클라이밍',
  },
  {
    svg: 'OnboardingTennis',
    name: '테니스',
    value: '테니스',
  },
  {
    svg: 'OnboardingBasketball',
    name: '농구',
    value: '농구',
  },
  {
    svg: 'OnboardingSoccer',
    name: '축구',
    value: '축구',
  },
  {
    svg: 'OnboardingPilates',
    name: '필라테스',
    value: '필라테스',
  },
  {
    svg: 'OnboardingYoga',
    name: '요가',
    value: '요가',
  },
  {
    svg: 'OnboardingSwimming',
    name: '수영',
    value: '수영',
  },
  {
    svg: 'OnboardingRunning',
    name: '러닝',
    value: '러닝',
  },
  {
    svg: 'OnboardingBicycle',
    name: '자전거',
    value: '자전거',
  },
  {
    svg: 'OnboardingBadminton',
    name: '배드민턴',
    value: '배드민턴',
  },
];
