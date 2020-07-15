import { useMemo } from 'react';
import { RecoilState, useRecoilState } from 'recoil';

import { getDropdownOptions } from '../services/devices-list.service';
import { useGetTranslatedLabels } from '../services/i18n.service';

import { Options } from '../models/common.model';
import { Labels } from '../models/i18n.model';

export const useGetSettingPairData = <S>(
    state: RecoilState<S>,
    options: Options<Labels>,
    label: Labels,
    getSelectedOptionId: (value: S) => string
) => {
    const [value, setState] = useRecoilState<S>(state);
    const optionLabels = useMemo(() => options.map(({ label }) => label), [options]);
    const [i18nLabel, ...i18nOptionLabels] = useGetTranslatedLabels([label, ...optionLabels]);

    const selectedOptionId = getSelectedOptionId(value);
    const dropdownOptions = useMemo(
        () => getDropdownOptions(options, i18nOptionLabels, selectedOptionId),
        [options, i18nOptionLabels, selectedOptionId]
    );

    return {
        value,
        setState,
        dropdownOptions,
        i18nLabel,
    };
};
