import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navigation-common-actions.scss';

import { navActionLabels, navActionLinks } from '../../../constants/nav.constants';

import { navActionTypes } from '../../../models/nav.model';

export const getCommonActionsClassNames = (shouldDisplayCommonActions: boolean) =>
    `nav-common-actions nav-common-actions__${
        shouldDisplayCommonActions ? 'expanded' : 'collapsed'
    }`;

export const CommonNavActions = React.memo(
    ({ isNavBarExpanded }: { isNavBarExpanded: boolean }) => {
        const [shouldExpandCommonActions, setCommonActionsVisibility] = useState(isNavBarExpanded);

        useEffect(() => {
            setCommonActionsVisibility(isNavBarExpanded);
        }, [isNavBarExpanded]);

        return (
            <section className={getCommonActionsClassNames(shouldExpandCommonActions)}>
                <section className="nav-section nav-section__top-border nav-section__logout">
                    <h3
                        onClick={() => {}}
                        className="nav-section-title nav-section-title__white-simple"
                    >
                        {navActionLabels[navActionTypes.logout]}
                    </h3>
                </section>
                <section className="nav-section nav-section__top-border nav-section__split">
                    <Link to={navActionLinks[navActionTypes.help]} className="action-as-link">
                        {navActionLabels[navActionTypes.help]}
                    </Link>
                    <section className="dropdown-as-link">
                        {navActionLabels[navActionTypes.translate]}
                    </section>
                </section>
            </section>
        );
    }
);
