import { SvgOptions } from "@/types/svg";
import Svg, { ClipPath, Defs, Ellipse, G, Path, Rect } from "react-native-svg";

export const AlertCircle = (props: SvgOptions) => {
    const { width = '16', height = '16', color = '#CBCFD2' } = props;

    return (
        <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
            <G clipPath="url(#clip0_72_1533)">
                <Ellipse cx="8.00033" cy="11.3333" rx="0.666667" ry="0.666666" transform="rotate(-180 8.00033 11.3333)" fill={color} />
                <Path d="M7.99967 9.33203L7.99968 4.66536M14.6663 7.9987C14.6663 11.6806 11.6816 14.6654 7.99967 14.6654C4.31778 14.6654 1.33301 11.6806 1.33301 7.9987C1.33301 4.3168 4.31778 1.33203 7.99967 1.33203C11.6816 1.33203 14.6663 4.3168 14.6663 7.9987Z" stroke="#CBCFD2" stroke-linecap="round" stroke-linejoin="round" />
            </G>
            <Defs>
                <ClipPath id="clip0_72_1533">
                    <Rect width={width} height={height} fill="white" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};
