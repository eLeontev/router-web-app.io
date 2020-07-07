import { useEffect, useState } from 'react';

import { toggleStatuses } from '../constants/hooks.constants';

export const useExpandCollapseHook = (isExpanded: boolean): toggleStatuses => {
    const [expandCollapseClassName, setClassName] = useState<toggleStatuses>(toggleStatuses.empty);

    useEffect(() => {
        setClassName((navClassName) =>
            navClassName
                ? isExpanded
                    ? toggleStatuses.expanded
                    : toggleStatuses.collapsed
                : toggleStatuses.none
        );
    }, [isExpanded, setClassName]);

    return expandCollapseClassName;
};
