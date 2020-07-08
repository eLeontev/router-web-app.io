import React from 'react';
import { useHistory } from 'react-router-dom';

import { rootPath } from '../../../../constants/router.constants';
import { navActionLabels } from '../../../../constants/nav.constants';

import { navActionTypes } from '../../../../models/nav.model';

export const Logout = React.memo(() => {
    const history = useHistory();

    return (
        <section className="nav-section nav-section__top-border nav-section__logout">
            <h3
                onClick={() => history.push({ pathname: rootPath, state: null })}
                className="nav-section-title nav-section-title__white-simple"
            >
                {navActionLabels[navActionTypes.logout]}
            </h3>
        </section>
    );
});
