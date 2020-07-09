import React from 'react';
import { Link } from 'react-router-dom';
import './navigation-common-actions.scss';

import { Logout } from './logout';
import { Translate } from './translate';

import { useGetTranslatedLabel } from '../../../../services/i18n.service';

import { navActionLinks } from '../../../../constants/nav.constants';

import { navActionTypes } from '../../../../models/nav.model';

export const getCommonActionsClassNames = (shouldDisplayCommonActions: boolean) =>
    `nav-common-actions nav-common-actions__${
        shouldDisplayCommonActions ? 'expanded' : 'collapsed'
    }`;

export const CommonNavActions = React.memo(
    ({ isNavBarExpanded }: { isNavBarExpanded: boolean }) => {
        const i18nActionLabel = useGetTranslatedLabel(navActionTypes.help);

        return (
            <section className={getCommonActionsClassNames(isNavBarExpanded)}>
                <Logout />
                <section className="nav-section nav-section__top-border nav-section__split">
                    <Link to={navActionLinks[navActionTypes.help]} className="action-as-link">
                        {i18nActionLabel}
                    </Link>
                    <Translate />
                </section>
            </section>
        );
    }
);
