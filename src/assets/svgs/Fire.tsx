import { SvgOptions } from "@/types/svg";
import Svg, { ClipPath, Defs, G, LinearGradient, Path, Rect, Stop } from "react-native-svg";

export const Fire = (props: SvgOptions) => (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
        <G clipPath="url(#clip0_16_2324)">
            <Path fillRule="evenodd" clipRule="evenodd" d="M13.125 7.875C13.125 11.2577 10.3827 14 7 14C3.61726 14 0.875 11.2577 0.875 7.875C0.875 5.40509 2.58242 3.50432 3.24318 2.8612C3.40721 2.70156 3.62 2.60786 3.84659 2.57549L4.02609 2.54984C4.77169 2.44333 5.40253 3.09858 5.2678 3.83961C5.25596 3.90474 5.24814 3.97106 5.25558 4.03684C5.3049 4.47331 5.67534 4.8125 6.125 4.8125C6.60824 4.8125 7 4.42074 7 3.9375V1.37042C7 0.613556 7.61356 0 8.37042 0C8.6188 0 8.86126 0.066067 9.06308 0.210849C10.0646 0.929335 13.125 3.48405 13.125 7.875ZM8.75 10.5C8.75 11.4665 7.9665 12.25 7 12.25C6.0335 12.25 5.25 11.4665 5.25 10.5C5.25 8.10507 8.75 8.10507 8.75 10.5Z" fill="url(#paint0_linear_16_2324)" />
        </G>
        <Defs>
            <LinearGradient id="paint0_linear_16_2324" x1="7" y1="0" x2="7" y2="14" gradientUnits="userSpaceOnUse">
                <Stop stopColor="#FB66BD" />
                <Stop offset="1" stopColor="#FF0034" />
            </LinearGradient>
            <ClipPath id="clip0_16_2324">
                <Rect width="14" height="14" fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
);
