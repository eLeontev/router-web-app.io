import { I18nLoginLabels, languages } from '../../models/i18n.model';

const { english, russian } = languages;

export const i18nLoginLabels: I18nLoginLabels = {
    loginTitleLabel: {
        [russian]: 'Авторизация',
        [english]: 'Login page',
    },
    resetLabel: {
        [russian]: 'сброс',
        [english]: 'reset',
    },
    setDefaultLabel: {
        [russian]: 'по умолчанию',
        [english]: 'set default',
    },
    loginButtonLabel: {
        [russian]: 'Авторизоваться',
        [english]: 'Login',
    },
    invalidCredentialsMessageLabel: {
        [russian]: 'Введенные данные не верны',
        [english]: 'The credentials are invalid',
    }
};
