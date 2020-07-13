import { I18nCommonLabels, languages } from '../../models/i18n.model';

const { english, russian } = languages;

export const i18nCommonLabels: I18nCommonLabels = {
    searchPlaceholderLabel: {
        [russian]: 'Поиск настроек',
        [english]: 'Search for settings',
    },
    saveButtonLabel: {
        [russian]: 'Сохранить',
        [english]: 'Save',
    },
    cancelButtonLabel: {
        [russian]: 'Отмена',
        [english]: 'Cancel',
    },
};
