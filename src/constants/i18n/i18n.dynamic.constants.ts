import { i18nDynamicKey } from '../common.constants';

import {
    I18nDynamicDevicesListLabels,
    I18nDynamicModalLabels,
    languages,
} from '../../models/i18n.model';

const { english, russian } = languages;

export const i18nDynamicModalLabels: I18nDynamicModalLabels = {
    connectionTitleLabel: {
        [russian]: `Информация о беспроводной сети ${i18nDynamicKey} в диапазоне ${i18nDynamicKey}`,
        [english]: `Connection information for the ${i18nDynamicKey} ${i18nDynamicKey} Wi-Fi network`,
    },
};

export const i18nDynamicDevicesListLabels: I18nDynamicDevicesListLabels = {
    speedValueRangeErrorLabel: {
        [russian]: `Нужно число от ${i18nDynamicKey} до ${i18nDynamicKey}`,
        [english]: `Must be a number from ${i18nDynamicKey} to ${i18nDynamicKey}`,
    },
};
