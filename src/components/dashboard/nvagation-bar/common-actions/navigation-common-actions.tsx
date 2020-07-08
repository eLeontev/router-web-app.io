import React from 'react';
import { Link } from 'react-router-dom';
import './navigation-common-actions.scss';

import { Logout } from './logout';

import { navActionLabels, navActionLinks } from '../../../../constants/nav.constants';

import { navActionTypes } from '../../../../models/nav.model';

export const getCommonActionsClassNames = (shouldDisplayCommonActions: boolean) =>
    `nav-common-actions nav-common-actions__${
        shouldDisplayCommonActions ? 'expanded' : 'collapsed'
    }`;

export const CommonNavActions = React.memo(
    ({ isNavBarExpanded }: { isNavBarExpanded: boolean }) => (
        <section className={getCommonActionsClassNames(isNavBarExpanded)}>
            <Logout />
            <section className="nav-section nav-section__top-border nav-section__split">
                <Link to={navActionLinks[navActionTypes.help]} className="action-as-link">
                    {navActionLabels[navActionTypes.help]}
                </Link>
                <section className="dropdown-as-link">
                    {navActionLabels[navActionTypes.translate]}
                </section>
            </section>
        </section>
    )
);
