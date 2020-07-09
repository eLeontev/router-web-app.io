import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { toggleNavBarState } from '../recoil-state/navigation.state';

import { NavigationBarProps } from '../models/navigation.model';

export const useToggleNavBar = (): NavigationBarProps => {
    const [isNavBarExpanded, toggleNavBarHandler] = useRecoilState(toggleNavBarState);
    const toggleNavBar = useCallback(
        () => toggleNavBarHandler((isNavBarExpanded: boolean) => !isNavBarExpanded),
        [toggleNavBarHandler]
    );

    return { isNavBarExpanded, toggleNavBar };
};
