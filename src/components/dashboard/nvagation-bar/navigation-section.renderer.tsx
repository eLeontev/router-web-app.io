import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import { useToggleNavBar } from '../../../hooks/toggle-nav-bar.recoil.hook';
import { useGetTranslatedLabel } from '../../../services/i18n.service';
import {
    getActionsClassNames,
    getSectionClassNames,
    getSectionTitleClassNames,
} from '../../../services/navigation.service';

import { navActionLinks } from '../../../constants/nav.constants';

import { LinkAction, LinkActions, navSectionTypes } from '../../../models/nav.model';

export type SectionRendererProps = {
    isActive: boolean;
    shouldExpandSection: boolean;
    type: navSectionTypes;
    onExpandNavBar: () => void;
    onExpandSection: () => void;
    linkActions: LinkActions;
};

export const LinkMemoAction = React.memo(({redirectHandler, i18nActionLabel}: any) => ((
    <Link className="nav-section-action" to={redirectHandler}>
        {i18nActionLabel}
    </Link>
)));

export const LinkActionRenderer = React.memo(({ type }: LinkAction) => {
    const i18nActionLabel = useGetTranslatedLabel(type);
    const { toggleNavBar } = useToggleNavBar();

    const redirectHandler = useCallback(() => {
        toggleNavBar();
        return navActionLinks[type];
    }, [type, toggleNavBar]);

    return <LinkMemoAction redirectHandler={redirectHandler} i18nActionLabel={i18nActionLabel} />;
});

export const renderLinkActions = (linkActions: LinkActions) =>
    linkActions.map((linkAction: LinkAction) => (
        <LinkActionRenderer key={linkAction.type} {...linkAction} />
    ));

export const SectionRenderer = React.memo(
    ({
        onExpandNavBar,
        type,
        shouldExpandSection,
        onExpandSection,
        isActive,
        linkActions,
    }: SectionRendererProps) => {
        const i18nSectionLabel = useGetTranslatedLabel(type);

        return (
            <section onClick={onExpandNavBar} className={getSectionClassNames(type)}>
                <h3
                    onClick={onExpandSection}
                    className={getSectionTitleClassNames(isActive, shouldExpandSection)}
                >
                    {i18nSectionLabel}
                </h3>
                <section className={getActionsClassNames(shouldExpandSection)}>
                    {renderLinkActions(linkActions)}
                </section>
            </section>
        );
    }
);
