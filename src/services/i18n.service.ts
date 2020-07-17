import { useMemo, useRef } from 'react';
import { useRecoilValue } from 'recoil';

import { i18nState } from '../recoil-state/i18n.state';
import { i18nLabels } from '../constants/i18n/i18n.constants';

import { Labels, languages } from '../models/i18n.model';

const useShouldReplaceLabels = (labels: Array<Labels>) => {
    const labelsRef = useRef(labels);
    useMemo(() => {
        if (labels.length === labelsRef.current.length) {
            const hasDifference = labels.some(
                (label: Labels, i: number) => label !== labelsRef.current[i]
            );

            if (hasDifference) {
                labelsRef.current = labels;
            }
        } else {
            labelsRef.current = labels;
        }
    }, [labels]);

    return labelsRef.current;
};
const getTranslatedLabel = (label: Labels, language: languages): string =>
    i18nLabels[label] ? i18nLabels[label][language] : '';

export const useGetTranslatedLabel = (label: Labels): string => {
    const language = useRecoilValue<languages>(i18nState);
    return useMemo(() => getTranslatedLabel(label, language), [language, label]);
};

export const useGetTranslatedLabels = (labels: Array<Labels>): Array<string> => {
    const memoizedLabels = useShouldReplaceLabels(labels);
    const language = useRecoilValue<languages>(i18nState);

    return useMemo(() => memoizedLabels.map((label) => getTranslatedLabel(label, language)), [
        language,
        memoizedLabels,
    ]);
};

export const useGetDynamicTranslatedLabel = (
    label: Labels,
    values: Array<string | number>
): string => {
    const language = useRecoilValue<languages>(i18nState);

    return useMemo(() => {
        let index = 0;
        return getTranslatedLabel(label, language).replace(/{\$}/g, () => String(values[index++]));
    }, [language, values, label]);
};

export const useGetTranslatedLabelsObject = <T extends Labels>(
    labels: Array<Labels>
): { [key in T]: string } => {
    const memoizedLabels = useShouldReplaceLabels(labels);
    const language = useRecoilValue<languages>(i18nState);

    return useMemo(
        () =>
            memoizedLabels.reduce(
                (res: any, label) => ({
                    ...res,
                    [label]: getTranslatedLabel(label, language),
                }),
                {}
            ),
        [language, memoizedLabels]
    ) as { [key in T]: string };
};
