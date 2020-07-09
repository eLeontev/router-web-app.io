import { I18nModalLabels, languages } from '../../models/i18n.model';

const { english, russian } = languages;

export const i18nModalLabels: I18nModalLabels = {
    networkNameLabel: {
        [russian]: 'Имя сети (SSID)',
        [english]: 'Network name (SSID)',
    },
    passwordLabel: {
        [russian]: 'Пароль',
        [english]: 'Password',
    },
    connectionDescriptionLabel: {
        [russian]:
            'Отсканируйте этот QR-код с помощью камеры вашего телефона, чтобы подключиться к беспроводной сети.',
        [english]: "Scan this QR code with your phone's camera to connect to the Wi-Fi network.",
    },
};
