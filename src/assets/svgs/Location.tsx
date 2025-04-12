import {SvgOptions} from '@/types/svg';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Location = (props: SvgOptions) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M11.9995 13.1463C13.3784 13.1463 14.4962 12.0285 14.4962 10.6497C14.4962 9.27082 13.3784 8.15304 11.9995 8.15304C10.6207 8.15304 9.50291 9.27082 9.50291 10.6497C9.50291 12.0285 10.6207 13.1463 11.9995 13.1463Z"
      stroke="#FCFCFD"
    />
    <Path
      d="M5.29386 9.1933C6.87026 2.26357 17.1368 2.27157 18.7052 9.2013C19.6254 13.2663 17.0968 16.7072 14.8803 18.8357C13.2719 20.3881 10.7272 20.3881 9.11082 18.8357C6.90226 16.7072 4.37363 13.2583 5.29386 9.1933Z"
      stroke="#FCFCFD"
    />
  </Svg>
);
