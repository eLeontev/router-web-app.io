import { useMemo, useRef } from 'react';
import { useRecoilValue } from 'recoil';

import { i18nState } from '../recoil-state/i18n/i18n.atom';
import { i18nLabels } from '../constants/i18n/i18n.constants';

import { Labels, languages } from '../models/i18n.model';

const getTranslatedLabel = (label: Labels, language: languages): string =>
    i18nLabels[label][language] || '';

export const useGetTranslatedLabel = (label: Labels): string => {
    const language = useRecoilValue<languages>(i18nState);
    return useMemo(() => getTranslatedLabel(label, language), [language, label]);
};

export const useGetTranslatedLabels = (labels: Array<Labels>): Array<string> => {
    const labelsRef = useRef(labels);
    const language = useRecoilValue<languages>(i18nState);

    return useMemo(() => labelsRef.current.map((label) => getTranslatedLabel(label, language)), [
        language,
    ]);
};
