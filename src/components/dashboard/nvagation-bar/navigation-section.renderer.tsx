import React from 'react';
import { Link } from 'react-router-dom';

import {
    navActionLabels,
    navActionLinks,
    navSectionTitles,
} from '../../../constants/nav.constants';
import {
    getSectionClassNames,
    getSectionTitleClassNames,
} from '../../../services/navigation.service';

import { LinkAction, LinkActions, navSectionTypes } from '../../../models/nav.model';

export type SectionRendererProps = {
    isActive: boolean;
    shouldExpandSection: boolean;
    type: navSectionTypes;
    onExpandNavBar: () => void;
    onExpandSection: () => void;
    linkActions: LinkActions;
};
export const renderLinkActions = (linkActions: LinkActions) =>
    linkActions.map(({ type }: LinkAction) => (
        <Link key={type} className="nav-section-action" to={navActionLinks[type]}>
            {navActionLabels[type]}
        </Link>
    ));

export const SectionRenderer = ({
    onExpandNavBar,
    type,
    shouldExpandSection,
    onExpandSection,
    isActive,
    linkActions,
}: SectionRendererProps) => (
    <section onClick={onExpandNavBar} className={getSectionClassNames(type, shouldExpandSection)}>
        <h3
            onClick={onExpandSection}
            className={getSectionTitleClassNames(isActive, shouldExpandSection)}
        >
            {navSectionTitles[type]}
        </h3>
        {shouldExpandSection ? (
            <section className="nav-section-actions">{renderLinkActions(linkActions)}</section>
        ) : null}
    </section>
);
