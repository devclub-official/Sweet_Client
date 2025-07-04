import {SvgOptions} from '@/types/svg';
import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
const LightCamera = (_: SvgOptions) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M2 10.4565C2 8.27136 3.77136 6.5 5.95645 6.5V6.5C6.58953 6.5 7.16169 6.12272 7.41107 5.54083L7.72075 4.81824C8.19349 3.71519 9.2781 3 10.4782 3H12H13.5218C14.7219 3 15.8065 3.71519 16.2792 4.81824L16.5889 5.54083C16.8383 6.12272 17.4105 6.5 18.0435 6.5V6.5C20.2286 6.5 22 8.27136 22 10.4565V15.5C22 18.2614 19.7614 20.5 17 20.5H7C4.23858 20.5 2 18.2614 2 15.5V10.4565Z"
      stroke="#F2F4F7"
      strokeWidth={1.5}
    />
    <Circle
      cx={3}
      cy={3}
      r={3}
      transform="matrix(-1 0 0 1 15 9.5)"
      stroke="#F2F4F7"
      strokeWidth={1.5}
    />
  </Svg>
);
export default LightCamera;
