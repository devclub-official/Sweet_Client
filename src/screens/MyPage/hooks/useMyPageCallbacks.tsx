import { useCallback } from "react"
import { HeaderRight } from "../components/HeaderRight";

export const useMyPage = () => {
    const renderHeaderRight = useCallback(() => (
        <HeaderRight />
    ), []);

    return {
        renderHeaderRight,
    };
};
