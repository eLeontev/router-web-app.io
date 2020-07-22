import { useMemo } from 'react';

import { getCommonClassModifier, getLabels, getRouterName } from '../services/devices-list.service';

import {
    CommonColumnData,
    ConnectionColumnData,
    deviceTableLabels,
    LimitsColumnData,
} from '../models/devices-list.model';
import { useGetTranslatedLabels } from '../services/i18n.service';

export const useGetLimitsValues = (props: LimitsColumnData) => {
    const { common, download, upload, isLimited, isAsymmetric } = props;
    const labels = useGetTranslatedLabels(getLabels([common, download, upload]));

    return useMemo(() => {
        if (isLimited) {
            const [commonLabel, downloadLabel, uploadLabel] = labels;

            const additionValue = isAsymmetric ? `${upload.value} ${uploadLabel}` : '';
            const mainValue = `${isAsymmetric ? download.value : common.value} ${
                isAsymmetric ? downloadLabel : commonLabel
            }`;

            return [mainValue, additionValue];
        }

        return ['-', ''];
    }, [download, common, upload, isAsymmetric, isLimited, labels]);
};

export const useGetCommonValues = (props: CommonColumnData) => {
    const { mainValue, additionalValue } = props;
    const [i18nMainValue, i18nAdditionalValue] = useGetTranslatedLabels([
        mainValue as deviceTableLabels,
        additionalValue as deviceTableLabels,
    ]);

    const calculatedMainValue = i18nMainValue || mainValue;
    const classModifier = getCommonClassModifier(mainValue);
    const calculatedAdditionalValue = `${i18nAdditionalValue || additionalValue} ${getRouterName(
        additionalValue
    )}`;

    return [calculatedMainValue, calculatedAdditionalValue, classModifier];
};

export const useGetConnectionValues = (props: ConnectionColumnData) => {
    const { isWired, connectionType, wirelessUnitLabel, speedValue } = props;
    const { value, unitId } = speedValue;

    const [connectionUnitLabel, speedUnitLabel] = useGetTranslatedLabels([
        wirelessUnitLabel,
        unitId as deviceTableLabels,
    ]);

    const mainValue = `${value} ${speedUnitLabel} ${isWired ? 'WPA2' : ''}`;
    const additionValue = isWired
        ? `${connectionType} ${connectionUnitLabel}`
        : `${connectionUnitLabel} ${connectionType}`;

    return [mainValue, additionValue];
};
