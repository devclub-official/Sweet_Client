import { SvgOptions } from "@/types/svg";
import Svg, { Path } from "react-native-svg";

export const ChevronBottom = (props: SvgOptions) => {
    const { width = '24', height = '24' } = props;

    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
            <Path d="M17.5858 8H6.41421C5.52331 8 5.07714 9.07714 5.70711 9.70711L11.2929 15.2929C11.6834 15.6834 12.3166 15.6834 12.7071 15.2929L18.2929 9.70711C18.9229 9.07714 18.4767 8 17.5858 8Z" fill="white" />
        </Svg>
    );
};
