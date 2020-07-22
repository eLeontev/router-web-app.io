import {
    I18nDevicesListLabels,
    I18nDevicesColumnLabels,
    I18nDevicesTableLabels,
    languages,
} from '../../models/i18n.model';

const { english, russian } = languages;

export const i18nDevicesListLabels: I18nDevicesListLabels = {
    titleLabel: {
        [russian]: 'Список устройств',
        [english]: 'Devices list',
    },
    descriptionLabel: {
        [russian]:
            'Здесь вы можете посмотреть, какие сетевые устройства подключены к интернет-центру, узнать состояние этих подключений и установить сетевые правила для зарегистрированных устройств.',
        [english]:
            'All network devices connected to your Keenetic, registered, unregistered and blocked; and the connection statuses of these devices.',
    },
    unregisteredDevicesTitleLabel: {
        [russian]: 'Незарегистрированные устройства',
        [english]: 'Unregistered devices',
    },
    unregisteredDevicesDescriptionLabel: {
        [russian]:
            'Зарегистрируйте ваши устройства, чтобы иметь более гибкие возможности по управлению домашней сетью и ее защитой.',
        [english]:
            'Within the unregistered device list you can register new devices allowing higher flexibility and greater protection of your home network. Also from the unregistered list you can block access to the Internet and/or Wi-Fi for undesirable devices.',
    },
    registeredDevicesTitleLabel: {
        [russian]: 'Зарегистрированные устройства',
        [english]: 'Registered devices',
    },
    blockedDevicesTitleLabel: {
        [russian]: 'Заблокированные устройства',
        [english]: 'Blocked devices',
    },
    blockedDevicesDescriptionLabel: {
        [russian]: 'Устройства, которым запрещен доступ в Интернет.',
        [english]: 'Devices to which Internet access is prohibited.',
    },
    addDeviceButtonLabel: {
        [russian]: 'Добавить устройство',
        [english]: 'Add device',
    },
    displayDeviceSettingsLabel: {
        [russian]: 'Настройки для незарегистрированных устройств',
        [english]: 'Settings for unregistered devices',
    },

    hideDeviceSettingsLabel: {
        [russian]: 'Скрыть настройки',
        [english]: 'Hide settings',
    },
    settingsDescriptionLabel: {
        [russian]: 'Эти настройки будут применяться ко всем незарегистрированным устройствам.',
        [english]: 'These settings will apply to all unregistered devices.',
    },

    withoutFilteringLabel: {
        [russian]: 'AdGuard DNS / Без фильтрации',
        [english]: 'AdGuard DNS / Without filtering',
    },
    withoutADCLabel: {
        [russian]: 'AdGuard DNS / Без рекламы',
        [english]: 'AdGuard DNS / Without ADC',
    },
    familyLabel: {
        [russian]: 'AdGuard DNS / Семейный',
        [english]: 'AdGuard DNS / Family',
    },
    speedLimitLabel: {
        [russian]: 'Ограничение скорости',
        [english]: 'Speed limit',
    },
    asymmetricLabel: {
        [russian]: 'Асимметрично',
        [english]: 'Asymmetric',
    },
};

export const i18nDevicesColumnLabels: I18nDevicesColumnLabels = {
    deviceLabel: {
        [russian]: 'Устройство',
        [english]: 'Host',
    },
    addressLabel: {
        [russian]: 'Адрес',
        [english]: 'Address',
    },
    segmentLabel: {
        [russian]: 'Сегмент',
        [english]: 'Segment',
    },
    connectionLabel: {
        [russian]: 'Подключение',
        [english]: 'Connection',
    },
    limitsLabel: {
        [russian]: 'Ограничение',
        [english]: 'Restriction',
    },
};

export const i18nDevicesTableLabels: I18nDevicesTableLabels = {
    viaRouterLabel: {
        [russian]: 'через',
        [english]: 'via',
    },
    noNameLabel: {
        [russian]: 'Без имени',
        [english]: 'No name',
    },
    homeSegmentLabel: {
        [russian]: 'Домашняя сеть',
        [english]: 'Home segment',
    },
    guestSegmentLabel: {
        [russian]: 'Гостевая сеть',
        [english]: 'Guest segment',
    },
    wiredLabel: {
        [russian]: 'По проводу',
        [english]: 'Wired',
    },
    segment2GHzLabel: {
        [russian]: 'Wi-Fi 2.4 ГГц',
        [english]: 'Wi-Fi 2.4 GHz',
    },
    segment5GHzLabel: {
        [russian]: 'Wi-Fi 5 ГГц',
        [english]: 'Wi-Fi 5 GHz',
    },
    MGzLabel: {
        [russian]: 'МГц',
        [english]: 'MGz',
    },
    portLabel: {
        [russian]: 'Порт',
        [english]: 'Port',
    },
    hasNoUnregisteredDevicesLabel: {
        [russian]: 'Нет незарегистрированных устройств',
        [english]: 'No registered devices',
    },
    hasNoRegisteredDevicesLabel: {
        [russian]: 'Нет зарегистрированных устройств',
        [english]: 'No unregistered devices',
    },
    hasNoBlockedDevicesLabel: {
        [russian]: 'Нет заблокированных устройств',
        [english]: 'No blocked devices',
    },
};
