import { RecoilState, useRecoilState } from 'recoil';

import { useGetTranslatedLabel } from '../services/i18n.service';

import { useGetDropdownOptions } from './prepare-options-to-dropdown.hook';

import { Options } from '../models/common.model';
import { Labels } from '../models/i18n.model';

export const useGetSettingPairData = <S>(
    state: RecoilState<S>,
    options: Options<Labels>,
    label: Labels,
    getSelectedOptionId: (value: S) => string
) => {
    const [value, setState] = useRecoilState<S>(state);
    const i18nLabel = useGetTranslatedLabel(label);
    const dropdownOptions = useGetDropdownOptions(options, getSelectedOptionId(value));

    return {
        value,
        setState,
        dropdownOptions,
        i18nLabel,
    };
};
