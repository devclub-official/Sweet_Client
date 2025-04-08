import {TextStyle} from 'react-native';

const FONT_WEIGHT = {
  light: {
    fontWeight: 300,
    fontFamily: 'Pretendard-Light',
  },
  regular: {
    fontWeight: 400,
    fontFamily: 'Pretendard-Regular',
  },
  medium: {
    fontWeight: 500,
    fontFamily: 'Pretendard-Medium',
  },
  bold: {
    fontWeight: 700,
    fontFamily: 'Pretendard-Bold',
  },
  black: {
    fontWeight: 900,
    fontFamily: 'Pretendard-Black',
  },
} as const;

export const FONTS: Record<string, TextStyle> = {
  Placeholder: {
    fontSize: 14,
    lineHeight: 20,
    ...FONT_WEIGHT.regular,
  },
} as const;

export type TypoName = keyof typeof FONTS;
