import React, { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';

import { i18nState } from '../../../../recoil-state/i18n/i18n.atom';

import { navActionLabels } from '../../../../constants/nav.constants';

import { navActionTypes } from '../../../../models/nav.model';
import { languages } from '../../../../models/i18n.model';

const { russian, english } = languages;
export const Translate = React.memo(() => {
    const setLanguage = useSetRecoilState(i18nState);

    const changeLanguage = useCallback(
        () => setLanguage((language: languages) => (language === russian ? english : russian)),
        [setLanguage]
    );
    return (
        <section onClick={changeLanguage} className="dropdown-as-link">
            {navActionLabels[navActionTypes.translate]}
        </section>
    );
});
