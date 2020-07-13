import React, { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';

import { i18nState } from '../../../../recoil-state/i18n.state';

import { useGetTranslatedLabel } from '../../../../services/i18n.service';

import { navActionTypes } from '../../../../models/nav.model';
import { languages } from '../../../../models/i18n.model';

export type TranslateProps = {
    classModifier?: string;
};
const { russian, english } = languages;
export const Translate = React.memo(({ classModifier = '' }: TranslateProps) => {
    const setLanguage = useSetRecoilState(i18nState);

    const changeLanguage = useCallback(
        () => setLanguage((language: languages) => (language === russian ? english : russian)),
        [setLanguage]
    );

    const i18nActionsLabels = useGetTranslatedLabel(navActionTypes.translate);

    return (
        <section onClick={changeLanguage} className={`dropdown-as-link ${classModifier}`}>
            {i18nActionsLabels}
        </section>
    );
});
