import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SvgOptions} from '@/types/svg';
export const ChevronRight = (props: SvgOptions) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M9 19L16 12L9 5"
      stroke="#FCFCFD"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
