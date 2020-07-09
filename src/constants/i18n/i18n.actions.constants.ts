import { I18nActionsLabels, languages } from '../../models/i18n.model';

const { english, russian } = languages;

export const i18nActionsLabels: I18nActionsLabels = {
    addLogoType: {
        [russian]: 'Добавить логотип',
        [english]: 'Add logo',
    },
    copyType: {
        [russian]: 'Скопировать пароль',
        [english]: 'Copy password',
    },
    printType: {
        [russian]: 'Распечатать',
        [english]: 'Print',
    },
    wpsType: {
        [russian]: 'Запустить WPS',
        [english]: 'WPS',
    },
    activatedWpsType: {
        [russian]: 'Остановить WPS',
        [english]: 'Stop WPS session',
    },
};
