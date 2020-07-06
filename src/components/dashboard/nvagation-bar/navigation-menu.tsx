import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navigation-menu.scss';

import { navigationMockData } from '../../../mock/nav.mock';
import {
    navActionLinks,
    navActionLabels,
    navSectionTitles,
} from '../../../constants/nav.constants';

import { LinkAction, LinkActions, NavSection, navSectionTypes } from '../../../models/nav.model';

export type IsNavBarCollapsed = {
    isNavBarExpanded: boolean;
};

export type SectionProps = NavSection & {
    toggleSectionHandler: (type: navSectionTypes) => void;
};
export const renderLinkActions = (linkActions: LinkActions) =>
    linkActions.map(({ type }: LinkAction) => (
        <Link key={type} className="navbar-section-action" to={navActionLinks[type]}>
            {navActionLabels[type]}
        </Link>
    ));

export const Section = React.memo(
    ({ type, linkActions, isExpanded, toggleSectionHandler }: SectionProps) => {
        return (
            <section className={`navbar-section navbar-section__${type}`}>
                <h3 onClick={() => toggleSectionHandler(type)} className="navbar-section-title">
                    {navSectionTitles[type]}
                </h3>
                {isExpanded ? (
                    <section className="navbar-section-actions">
                        {renderLinkActions(linkActions)}
                    </section>
                ) : null}
            </section>
        );
    }
);

export const NavigationMenu = ({ isNavBarExpanded }: IsNavBarCollapsed) => {
    const [sections, toggleSections] = useState(navigationMockData.sections);

    const toggleSectionHandler = useCallback(
        (type: navSectionTypes) =>
            toggleSections((sections) =>
                sections.map((section) => ({
                    ...section,
                    isExpanded: section.type === type ? !section.isExpanded : false,
                }))
            ),
        [toggleSections]
    );
    useEffect(() => {
        if (!isNavBarExpanded) {
            toggleSections((sections) =>
                sections.map((section) => ({ ...section, isExpanded: false }))
            );
        }
    }, [isNavBarExpanded]);

    return (
        <section className="navbar-sections">
            {sections.map((navSection: NavSection) => (
                <Section
                    key={navSection.type}
                    {...navSection}
                    toggleSectionHandler={isNavBarExpanded ? toggleSectionHandler : () => {}}
                />
            ))}
        </section>
    );
};
