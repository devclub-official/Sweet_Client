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
  dossaemMedium: {
    fontWeight: 500,
    fontFamily: 'DOSSaemmul',
  },
} as const;

export const FONTS = {
  HeadLargeB: {
    fontSize: 37,
    lineHeight: 42,
    letterSpacing: -0.74,
    ...FONT_WEIGHT.bold,
  },
  HeadMediumB: {
    fontSize: 32,
    lineHeight: 38,
    letterSpacing: -0.64,
    ...FONT_WEIGHT.bold,
  },
  HeadSmallB: {
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: -0.48,
    ...FONT_WEIGHT.bold,
  },
  SubLargeB: {
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.4,
    ...FONT_WEIGHT.bold,
  },
  SubMediumB: {
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.32,
    ...FONT_WEIGHT.bold,
  },
  SubSmallM: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.28,
    ...FONT_WEIGHT.medium,
  },
  BodyLargeR: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    ...FONT_WEIGHT.regular,
  },
  BodyMediumR: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.28,
    ...FONT_WEIGHT.regular,
  },
  BodySmallR: {
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.26,
    ...FONT_WEIGHT.regular,
  },
  ButtonLargeB: {
    fontSize: 16,
    lineHeight: 24,
    ...FONT_WEIGHT.bold,
  },
  ButtonMediumM: {
    fontSize: 14,
    lineHeight: 20,
    ...FONT_WEIGHT.medium,
  },
  ButtonSmallM: {
    fontSize: 13,
    lineHeight: 20,
    ...FONT_WEIGHT.medium,
  },
  CaptionR: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.24,
    ...FONT_WEIGHT.regular,
  },
  Pre01B: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.28,
    ...FONT_WEIGHT.bold,
  },
  Pre02R: {
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.26,
    ...FONT_WEIGHT.medium,
  },
  Pre03M: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.24,
    ...FONT_WEIGHT.medium,
  },
  Pre04M: {
    fontSize: 11,
    lineHeight: 18,
    letterSpacing: -0.22,
    ...FONT_WEIGHT.medium,
  },
  Pre05R: {
    fontSize: 11,
    lineHeight: 16,
    letterSpacing: -0.22,
    ...FONT_WEIGHT.regular,
  },
  Pre06R: {
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: -0.2,
    ...FONT_WEIGHT.regular,
  },
  Dossaem01: {
    fontSize: 16,
    lineHeight: 32,
    letterSpacing: -0.32,
    ...FONT_WEIGHT.dossaemMedium,
  },
} as const;

export type TypoName = keyof typeof FONTS;
