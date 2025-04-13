import {SvgOptions} from '@/types/svg';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Eye = (props: SvgOptions) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M14.5959 12.0036C14.5959 13.4393 13.4358 14.5994 12.0001 14.5994C10.5645 14.5994 9.40437 13.4393 9.40437 12.0036C9.40437 10.568 10.5645 9.40785 12.0001 9.40785C13.4358 9.40785 14.5959 10.568 14.5959 12.0036Z"
      stroke="#FCFCFD"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.0001 18C14.5597 18 16.9452 16.4918 18.6056 13.8816C19.2581 12.8592 19.2581 11.1408 18.6056 10.1184C16.9452 7.50816 14.5597 6 12.0001 6C9.44062 6 7.05512 7.50816 5.3947 10.1184C4.74213 11.1408 4.74213 12.8592 5.3947 13.8816C7.05512 16.4918 9.44062 18 12.0001 18Z"
      stroke="#FCFCFD"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
