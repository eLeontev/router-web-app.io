import { I18nCardsLabels, languages } from '../../models/i18n.model';

const { english, russian } = languages;

export const i18nCardsLabels: I18nCardsLabels = {
    download: {
        [russian]: 'Прием',
        [english]: 'Download',
    },
    upload: {
        [russian]: 'Передача',
        [english]: 'Upload',
    },
    hiddenDetailsLabel: {
        [russian]: 'Скрыть подробности',
        [english]: 'Hide details',
    },
    moreDetailsLabel: {
        [russian]: 'Подробнее о соединении',
        [english]: 'More details',
    },
    channelLabel: {
        [russian]: 'Канал',
        [english]: 'Channel',
    },
    showConnectionInfoButtonLabel: {
        [russian]: 'Информация о сети',
        [english]: 'Show connection info',
    },
    providerHeaderLabel: {
        [russian]: 'Провайдер',
        [english]: 'Provider',
    },
};
