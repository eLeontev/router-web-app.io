import { MutableRefObject, useEffect } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';

export const useVerticalPerfectScroll = (refElement: MutableRefObject<HTMLElement>) => {
    useEffect(() => {
        const element = refElement.current;
        const { height } = element.getBoundingClientRect();
        element.style.height = `${height}px`;

        const ps = new PerfectScrollbar(element as any, { wheelSpeed: 0.2 });
        return () => ps.destroy();
    }, [refElement]);
};
