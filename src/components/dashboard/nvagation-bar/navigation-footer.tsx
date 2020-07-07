import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import './navigation-footer.scss';

import { Button } from '../../common/button';
import { CommonNavActions } from './navigation-common-actions';

import { navActionLabels } from '../../../constants/nav.constants';
import { navigationMockData } from '../../../mock/nav.mock';

import { NavigationBarProps } from '../../../models/navigation.model';
import { expandSectionState } from '../../../recoil-state/navigation/expand-collapse.section.atom';
import { navSectionTypes } from '../../../models/nav.model';

export const NavigationFooter = React.memo(
    ({ triggerNavBar, isNavBarExpanded }: NavigationBarProps) => {
        const expandAllActions = useSetRecoilState(expandSectionState);
        const toggleNavBar = () => {
            triggerNavBar();
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
                    buttonHandler={toggleNavBar}
                    className="navbar-footer_trigger-action"
                    buttonName={navActionLabels[navigationMockData.footer.triggerNavAction.type]}
                ></Button>
            </section>
        );
    }
);
