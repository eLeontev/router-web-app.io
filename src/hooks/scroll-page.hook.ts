import { useEffect, useState } from 'react';

const scrollEventName = 'scroll';

export const useScrollPageListener = () => {
    const [withScroll, setWithScroll] = useState(false);
    useEffect(() => {
        const listener = () => setWithScroll(Boolean(window.pageYOffset));

        window.addEventListener(scrollEventName, listener);
        return () => window.removeEventListener(scrollEventName, listener);
    }, [setWithScroll]);

    return withScroll;
};
