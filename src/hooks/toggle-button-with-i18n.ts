import { useCallback, useState } from 'react';

import { useGetTranslatedLabels } from '../services/i18n.service';

import { Labels } from '../models/i18n.model';

export const useToggleButtonWithI18n = (labels: Array<Labels>) => {
    const [isHidden, toggleDetailsVisibility] = useState(true);
    const i18nLabels = useGetTranslatedLabels(labels);

    return {
        isHidden,
        i18nLabels,
        toggleDetailsVisibility: useCallback(
            () => toggleDetailsVisibility((isHidden) => !isHidden),
            [toggleDetailsVisibility]
        ),
    };
};
