import Svg, { Path } from "react-native-svg";

export const Comment = () => {
    return (
        <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
            <Path d="M16.5 2H8.5C4.5 2 2.5 4 2.5 8V21C2.5 21.55 2.95 22 3.5 22H16.5C20.5 22 22.5 20 22.5 16V8C22.5 4 20.5 2 16.5 2Z" stroke="#FCFCFD" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M7.5 9.5H17.5" stroke="#FCFCFD" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M7.5 14.5H14.5" stroke="#FCFCFD" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    );
};
