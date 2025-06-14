import * as React from 'react';
import Svg, {Rect, Path, Circle, SvgProps} from 'react-native-svg';
const LightImage = (_: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Rect
      x={2}
      y={2}
      width={20}
      height={20}
      rx={5}
      stroke="#F2F4F7"
      strokeWidth={1.5}
    />
    <Path
      d="M2.5 17.5L4.7592 15.8863C5.47521 15.3749 6.45603 15.456 7.07822 16.0782L8.15147 17.1515C8.6201 17.6201 9.3799 17.6201 9.84853 17.1515L14.8377 12.1623C15.496 11.504 16.5476 11.4563 17.2628 12.0523L22 16"
      stroke="#F2F4F7"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Circle
      cx={2}
      cy={2}
      r={2}
      transform="matrix(-1 0 0 1 10 6)"
      stroke="#F2F4F7"
      strokeWidth={1.5}
    />
  </Svg>
);
export default LightImage;
