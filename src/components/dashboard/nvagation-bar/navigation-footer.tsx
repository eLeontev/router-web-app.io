import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import './navigation-footer.scss';

import { Button } from '../../common/button';
import { CommonNavActions } from './common-actions/navigation-common-actions';

import { useGetTranslatedLabel } from '../../../services/i18n.service';

import { expandSectionState } from '../../../recoil-state/navigation.state';
import { useToggleNavBar } from '../../../hooks/toggle-nav-bar.recoil.hook';

import { navActionTypes, navSectionTypes } from '../../../models/nav.model';

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

    const i18nActionsLabels = useGetTranslatedLabel(navActionTypes.triggerNav);

    return (
        <section className="navbar-footer">
            <CommonNavActions isNavBarExpanded={isNavBarExpanded} />

            <Button
                buttonHandler={triggerNavBar}
                className="navbar-footer_trigger-action"
                buttonName={i18nActionsLabels}
            ></Button>
        </section>
    );
});
