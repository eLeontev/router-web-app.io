import React, { useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';

import { SectionRenderer } from './navigation-section.renderer';

import { expandSectionState } from '../../../recoil-state/navigation/expand-collapse.section.atom';
import { getActiveSection } from '../../../services/navigation.service';
import { useToggleNavBar } from '../../../hooks/toggle-nav-bar.recoil.hook';

import { NavSection, navSectionTypes } from '../../../models/nav.model';

export const Section = React.memo(({ type, linkActions }: NavSection) => {
    const { isNavBarExpanded, toggleNavBar } = useToggleNavBar();
    const [expandedType, expandSection] = useRecoilState(expandSectionState);
    const history = useHistory();

    const onExpandSection = useCallback(() => {
        expandSection(type);
    }, [expandSection, type]);

    const onExpandNavBar = useCallback(() => {
        if (!isNavBarExpanded) {
            toggleNavBar();
        }
        onExpandSection();
    }, [isNavBarExpanded, toggleNavBar, onExpandSection]);

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
});

export const DefaultSection = React.memo(() => {
    const { isNavBarExpanded, toggleNavBar } = useToggleNavBar();
    const expandSection = useSetRecoilState(expandSectionState);
    const history = useHistory();

    const onExpandNavBar = useCallback(() => {
        toggleNavBar();
        if (!isNavBarExpanded) {
            expandSection(getActiveSection(history.location.pathname));
        }
    }, [isNavBarExpanded, toggleNavBar, expandSection, history.location.pathname]);

    return <section className="nav-section nav-section__empty" onClick={onExpandNavBar}></section>;
});
