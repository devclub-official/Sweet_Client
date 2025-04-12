import {svgMap} from '@/assets/svgs';

export type SvgNames = keyof typeof svgMap;
// 바뀌는 속성이 추가로 있으면 속성 추가.
export interface SvgOptions {
  color?: string;
  width?: string;
  height?: string;
}
