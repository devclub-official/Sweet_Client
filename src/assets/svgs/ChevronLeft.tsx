import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SvgOptions} from '@/types/svg';
export const ChevronLeft = (props: SvgOptions) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M15 19L8 12L15 5"
      stroke="#FCFCFD"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
