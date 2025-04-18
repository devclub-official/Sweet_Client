export const colors = {
  PRI: '#66FBEF',
  PRI_200: '#E0FEFB',
  PRI_400: 'C1FDF8',
  PRI_500: '#B2FDF7',
  SUB: '#66FBA5',
  SUB_200: '#E0FEED',
  SUB_400: '#C1FDDB',
  SUB_500: '#B2FDD2',
  SUB02: '#FB66BD',
  SUB02_200: '#FEE0F1',
  SUB02_400: '#FDC1E4',
  SUB02_500: '#FDB2DE',
  SUB03: '#66BDFB',
  SUB03_400: '#C1E4FD',
  SUB03_500: '#B2DEFD',
  CG1: '#F9FAFA',
  CG2: '#F4F5F6',
  CG3: '#EFF0F1',
  CG4: '#E4E5E7',
  CG5: '#E5E7E8',
  CG6: '#DFE2E4',
  CG7: '#D9DBDD',
  CG8: '#D5D8DB',
  CG9: '#D0D3D6',
  CG10: '#CBCFD2',
  CG11: '#CBCFD2',
  CG12: '#B6BABD',
  CG13: '#A2A5A8',
  CG14: '#8E9093',
  CG15: '#797C7E',
  CG16: '#656769',
  CG17: '#515254',
  CG18: '#3C3E3F',
  CG19: '#28292A',
  CG20: '#141415',
  B: '#000000',
  B_BASE_PRI: '#121212',
  B_BASE_30: '#4D121212',
  B_BASE_60: '#99121212',
  B_BASE_75: '#BF121212',
  B_50: '#FCFCFD',
  B_100: '#F2F4F7',
  B_200: '#E4E7EC',
  B_300: '#D0D5DD',
  B_400: '#ABB1BA',
  B_500: '#7A7F89',
  B_600: '#40444D',
  B_700: '#282B31',
  B_800: '#1D1F23',
  B_900: '#17181C',
} as const;

export type ColorName = keyof typeof colors;
