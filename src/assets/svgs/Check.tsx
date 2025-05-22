import { SvgOptions } from "@/types/svg";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

export const Check = (props: SvgOptions) => {
    const { width = '16', height = '16', color = '#FCFCFD' } = props;

    return (
        <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
            <G clipPath="url(#clip0_72_1466)">
                <Path d="M3.33301 8.0013L6.66634 11.3346L13.333 4.66797" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
            </G>
            <Defs>
                <ClipPath id="clip0_72_1466">
                    <Rect width={width} height={height} fill="white" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};
