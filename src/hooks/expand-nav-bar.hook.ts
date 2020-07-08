import React, { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';

import { useToggleNavBar } from './toggle-nav-bar.recoil.hook';

import { expandSectionState } from '../recoil-state/navigation/expand-collapse.section.atom';

import { getActiveSection } from '../services/navigation.service';

export const useDefaultExpandNavBarHandler = () => {
    const { isNavBarExpanded, toggleNavBar } = useToggleNavBar();
    const expandSection = useSetRecoilState(expandSectionState);
    const history = useHistory();

    return useCallback(
        ({ target }: React.MouseEvent<HTMLElement, MouseEvent>) => {
            if ((target as any).className.includes('nav-sections')) {
                toggleNavBar();
                if (!isNavBarExpanded) {
                    expandSection(getActiveSection(history.location.pathname));
                }
            }
        },
        [isNavBarExpanded, toggleNavBar, expandSection, history.location.pathname]
    );
};
