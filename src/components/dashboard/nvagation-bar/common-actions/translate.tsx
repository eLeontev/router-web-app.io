import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { i18nState } from '../../../../recoil-state/i18n.state';

import { useGetTranslatedLabel } from '../../../../services/i18n.service';

import { localStorageI18nKey } from '../../../../constants/i18n/i18n.constants';

import { navActionTypes } from '../../../../models/nav.model';
import { languages } from '../../../../models/i18n.model';

export type TranslateProps = {
    classModifier?: string;
};
const { russian, english } = languages;
export const Translate = React.memo(({ classModifier = '' }: TranslateProps) => {
    const [lang, setLanguage] = useRecoilState(i18nState);

    const changeLanguage = useCallback(() => {
        const language = lang === russian ? english : russian;
        localStorage.setItem(localStorageI18nKey, language);
        setLanguage(language);
    }, [setLanguage, lang]);

    const i18nActionsLabels = useGetTranslatedLabel(navActionTypes.translate);

    return (
        <section onClick={changeLanguage} className={`dropdown-as-link ${classModifier}`}>
            {i18nActionsLabels}
        </section>
    );
});
