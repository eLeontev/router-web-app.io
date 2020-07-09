import { I18nDynamicModalLabels, languages } from '../../models/i18n.model';

const { english, russian } = languages;

export const i18nDynamicModalLabels: I18nDynamicModalLabels = {
    connectionTitleLabel: {
        [russian]: 'Информация о беспроводной сети {$} в диапазоне {$}',
        [english]: 'Connection information for the {$} {$} Wi-Fi network',
    },
};
