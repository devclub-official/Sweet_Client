import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SvgOptions} from '@/types/svg';
export const Dumbbell = (props: SvgOptions) => {
  const {width = '36', height = '23', color = 'white'} = props;
  return (
    <Svg width={width} height={height} fill="none" viewBox="0 0 36 23">
      <Path
        stroke={color}
        d="M35 6.2a1 1 0 0 0-1-1h-2.988V1.756a1 1 0 0 0-1-1h-4.224a1 1 0 0 0-1 1v7.472H11.213V1.756a1 1 0 0 0-1-1H5.988a1 1 0 0 0-1 1V5.2H2a1 1 0 0 0-1 1v10.111a1 1 0 0 0 1 1h2.987v3.445a1 1 0 0 0 1 1h4.226a1 1 0 0 0 1-1v-7.472h13.575v7.472a1 1 0 0 0 1 1h4.224a1 1 0 0 0 1-1V17.31H34a1 1 0 0 0 1-1V6.201Z"
      />
    </Svg>
  );
};
