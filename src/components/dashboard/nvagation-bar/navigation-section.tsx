import React, { useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';

import { SectionRenderer } from './navigation-section.renderer';

import { expandSectionState } from '../../../recoil-state/navigation/expand-collapse.section.atom';
import { getActiveSection } from '../../../services/navigation.service';

import { NavSection, navSectionTypes } from '../../../models/nav.model';
import { NavigationBarProps } from '../../../models/navigation.model';

export const Section = React.memo(
    ({ type, linkActions, isNavBarExpanded, triggerNavBar }: NavSection & NavigationBarProps) => {
        const [expandedType, expandSection] = useRecoilState(expandSectionState);
        const history = useHistory();

        const onExpandSection = useCallback(() => {
            expandSection(type);
        }, [expandSection, type]);

        const onExpandNavBar = useCallback(() => {
            if (!isNavBarExpanded) {
                triggerNavBar();
            }
            onExpandSection();
        }, [isNavBarExpanded, triggerNavBar, onExpandSection]);

        const shouldExpandSection = expandedType === type || expandedType === navSectionTypes.all;
        const isActive = getActiveSection(history.location.pathname) === type;

        return (
            <SectionRenderer
                isActive={isActive}
                shouldExpandSection={shouldExpandSection}
                type={type}
                linkActions={linkActions}
                onExpandNavBar={onExpandNavBar}
                onExpandSection={onExpandSection}
            />
        );
    }
);

export const DefaultSection = React.memo(
    ({ isNavBarExpanded, triggerNavBar }: NavigationBarProps) => {
        const expandSection = useSetRecoilState(expandSectionState);
        const history = useHistory();

        const onExpandNavBar = useCallback(() => {
            triggerNavBar();
            if (!isNavBarExpanded) {
                expandSection(getActiveSection(history.location.pathname));
            }
        }, [isNavBarExpanded, triggerNavBar, expandSection, history.location.pathname]);

        return (
            <section className="nav-section nav-section__empty" onClick={onExpandNavBar}></section>
        );
    }
);
