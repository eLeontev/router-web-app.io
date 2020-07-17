import { i18nDynamicKey } from '../common.constants';

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
    registerNewDeviceTitleLabel: {
        [russian]: 'Добавить устройство по MAC-адресу',
        [english]: 'Register your device using the MAC address',
    },
    hostNameLabel: {
        [russian]: 'Имя устройства',
        [english]: 'Host name',
    },
    connectionPolicyLabel: {
        [russian]: 'Профиль доступа',
        [english]: 'Connection policy',
    },
    wirelessAccessControlTitleLabel: {
        [russian]: 'Контроль доступа к беспроводной сети',
        [english]: 'Wireless access control',
    },
    wirelessAccessControlDescriptionLabel: {
        [russian]: `Контроль доступа к беспроводной сети выключен. Вы можете настроить его на странице ${i18nDynamicKey}.`,
        [english]: `Wireless access control is disabled. You can configure it on the ${i18nDynamicKey} page`,
    },
    registerDeviceLabel: {
        [russian]: 'Зарегистрировать',
        [english]: 'Register',
    },
    requiredFieldErrorLabel: {
        [russian]: 'Это обязательное поле',
        [english]: 'This field is required',
    },
    stayButtonLabel: {
        [russian]: 'Остаться',
        [english]: 'Stay',
    },
    leaveButtonLabel: {
        [russian]: 'Покинуть',
        [english]: 'Leave',
    },
    defaultPolicyLabel: {
        [russian]: 'Основной профиль',
        [english]: 'Default policy',
    },
    noInternetAccessLabel: {
        [russian]: 'Без доступа в Интернет',
        [english]: 'No Internet access',
    },
};
