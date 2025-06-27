import { SvgOptions } from "@/types/svg";
import Svg, { Path } from "react-native-svg";

export const GroupFire = (props: SvgOptions) => {
    const { width = '18', height = '22', color = 'white' } = props;
    return (
        <Svg width={width} height={height} viewBox="0 0 18 22" fill="none">
            <Path 
                d="M11.0716 1.42826C11.0696 1.35204 10.9864 1.30227 10.9208 1.34117C7.03045 3.64882 7.12638 9.49039 7.17223 10.4856C7.1755 10.5566 7.10795 10.6046 7.04344 10.5748C6.61146 10.3754 5.30293 9.58955 5.23852 7.36523C5.23631 7.28889 5.15396 7.23951 5.08817 7.27828C2.84978 8.59734 1.34717 11.043 1.34717 13.7558C1.34717 17.898 4.82939 21.2559 9.12495 21.2559C13.4205 21.2559 16.9027 17.898 16.9027 13.7558C16.9027 7.73061 11.1998 6.44081 11.0716 1.42826Z" 
                stroke={color}
            />
        </Svg>
    );
};
