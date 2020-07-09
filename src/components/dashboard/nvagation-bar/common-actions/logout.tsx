import React from 'react';
import { useHistory } from 'react-router-dom';

import { rootPath } from '../../../../constants/router.constants';

import { navActionTypes } from '../../../../models/nav.model';
import { useGetTranslatedLabel } from '../../../../services/i18n.service';

export const Logout = React.memo(() => {
    const history = useHistory();
    const i18nActionLabel = useGetTranslatedLabel(navActionTypes.logout);

    return (
        <section className="nav-section nav-section__top-border nav-section__logout">
            <h3
                onClick={() => history.push({ pathname: rootPath, state: null })}
                className="nav-section-title nav-section-title__white-simple"
            >
                {i18nActionLabel}
            </h3>
        </section>
    );
});
