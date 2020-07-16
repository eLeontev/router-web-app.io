import {
    I18nDynamicDevicesListLabels,
    I18nDynamicModalLabels,
    languages,
} from '../../models/i18n.model';

const { english, russian } = languages;

export const i18nDynamicModalLabels: I18nDynamicModalLabels = {
    connectionTitleLabel: {
        [russian]: 'Информация о беспроводной сети {$} в диапазоне {$}',
        [english]: 'Connection information for the {$} {$} Wi-Fi network',
    },
};

export const i18nDynamicDevicesListLabels: I18nDynamicDevicesListLabels = {
    speedValueRangeErrorLabel: {
        [russian]: 'Нужно число от {$} до {$}',
        [english]: 'Must be a number from {$} to {$}',
    },
};
