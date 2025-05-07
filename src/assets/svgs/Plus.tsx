import { SvgOptions } from "@/types/svg";
import Svg, { Path } from "react-native-svg";

export const Plus = (props: SvgOptions) => {
    const { width = '24', height = '24', color = 'white' } = props;
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
            <Path d="M6 12H12M12 12H18M12 12V18M12 12V6" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    );
};
