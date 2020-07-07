import React, { useEffect, useState } from 'react';
import './navigation-common-actions.scss';

import { navActionLabels, navActionLinks } from '../../../constants/nav.constants';

import { navActionTypes } from '../../../models/nav.model';
import { Link } from 'react-router-dom';

export const CommonNavActions = React.memo(
    ({ isNavBarExpanded }: { isNavBarExpanded: boolean }) => {
        const [shouldDisplayCommonActions, setCommonActionsVisibility] = useState(isNavBarExpanded);

        useEffect(() => {
            let timerId: NodeJS.Timeout;
            if (isNavBarExpanded) {
                timerId = setTimeout(() => {
                    setCommonActionsVisibility(true);
                }, 500);
            } else {
                setCommonActionsVisibility(false);
            }

            return () => clearTimeout(timerId);
        }, [isNavBarExpanded]);

        return shouldDisplayCommonActions ? (
            <section className="nav-common-actions">
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
        ) : null;
    }
);
