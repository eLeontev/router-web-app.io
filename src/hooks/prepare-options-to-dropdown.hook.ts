import { useMemo } from 'react';

import { getDropdownOptions } from '../services/devices-list.service';
import { useGetTranslatedLabels } from '../services/i18n.service';

import { DropdownOptions, Options } from '../models/common.model';
import { Labels } from '../models/i18n.model';

export const useGetDropdownOptions = (
    options: Options<Labels>,
    selectedOptionId: string
): DropdownOptions<string> => {
    const optionLabels = useMemo(() => options.map(({ label }) => label), [options]);
    const i18nOptionLabels = useGetTranslatedLabels(optionLabels);

    return useMemo(() => getDropdownOptions(options, i18nOptionLabels, selectedOptionId), [
        options,
        i18nOptionLabels,
        selectedOptionId,
    ]);
};
