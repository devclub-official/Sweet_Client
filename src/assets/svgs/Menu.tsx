import { SvgOptions } from "@/types/svg";
import Svg, { Path } from "react-native-svg";

export const Menu = (props: SvgOptions) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
        <Path d="M5 17H19M5 12H19M5 7H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
);
