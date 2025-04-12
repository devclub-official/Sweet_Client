import {svgMap} from '@/assets/svgs';
import {SvgNames, SvgOptions} from '@/types/svg';

interface Props {
  svgName: SvgNames;
  options?: SvgOptions;
}

export const Svg = ({svgName, options}: Props) => {
  const SvgComponent = svgMap[svgName];
  return <SvgComponent {...options} />;
};
