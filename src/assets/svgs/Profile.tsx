import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={22} height={22} fill="none" viewBox="0 0 22 22" {...props}>
    <Path
      stroke="#FCFCFD"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.287 11.439a.963.963 0 0 0-.24 0 3.27 3.27 0 0 1-3.16-3.27c0-1.81 1.46-3.28 3.28-3.28a3.276 3.276 0 0 1 .12 6.55ZM17.906 18.039a9.934 9.934 0 0 1-6.74 2.62c-2.6 0-4.96-.99-6.74-2.62.1-.94.7-1.86 1.77-2.58 2.74-1.82 7.22-1.82 9.94 0 1.07.72 1.67 1.64 1.77 2.58Z"
    />
    <Path
      stroke="#FCFCFD"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.166 20.66c5.523 0 10-4.478 10-10 0-5.524-4.477-10-10-10s-10 4.476-10 10c0 5.522 4.477 10 10 10Z"
    />
  </Svg>
);
export default SvgComponent;
