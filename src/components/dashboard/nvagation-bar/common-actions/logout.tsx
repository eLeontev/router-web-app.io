import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { useGetTranslatedLabel } from '../../../../services/i18n.service';
import { useToggleNavBar } from '../../../../hooks/toggle-nav-bar.recoil.hook';

import { rootPath } from '../../../../constants/router.constants';

import { navActionTypes } from '../../../../models/nav.model';

export const Logout = React.memo(() => {
    const history = useHistory();
    const i18nActionLabel = useGetTranslatedLabel(navActionTypes.logout);

    const { toggleNavBar } = useToggleNavBar();
    const redirectHandler = useCallback(() => {
        toggleNavBar();
        history.push({ pathname: rootPath, state: null });
    }, [toggleNavBar, history]);

    return (
        <section className="nav-section nav-section__top-border nav-section__logout">
            <h3
                onClick={redirectHandler}
                className="nav-section-title nav-section-title__white-simple"
            >
                {i18nActionLabel}
            </h3>
        </section>
    );
});
