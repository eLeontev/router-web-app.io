import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import './navigation-footer.scss';

import { Button } from '../../common/button';
import { CommonNavActions } from './common-actions/navigation-common-actions';

import { navActionLabels } from '../../../constants/nav.constants';
import { navigationMockData } from '../../../mock/nav.mock';

import { expandSectionState } from '../../../recoil-state/navigation/expand-collapse.section.atom';
import { useToggleNavBar } from '../../../hooks/toggle-nav-bar.recoil.hook';

import { navSectionTypes } from '../../../models/nav.model';

export const NavigationFooter = React.memo(() => {
    const { isNavBarExpanded, toggleNavBar } = useToggleNavBar();
    const expandAllActions = useSetRecoilState(expandSectionState);
    const triggerNavBar = () => {
        toggleNavBar();
        expandAllActions(navSectionTypes.all);
    };
    useEffect(() => {
        if (!isNavBarExpanded) {
            expandAllActions(navSectionTypes.none);
        }
    }, [isNavBarExpanded, expandAllActions]);

    return (
        <section className="navbar-footer">
            <CommonNavActions isNavBarExpanded={isNavBarExpanded} />

            <Button
                buttonHandler={triggerNavBar}
                className="navbar-footer_trigger-action"
                buttonName={navActionLabels[navigationMockData.footer.triggerNavAction.type]}
            ></Button>
        </section>
    );
});
