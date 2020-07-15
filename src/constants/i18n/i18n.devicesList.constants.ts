import { I18nDevicesListLabels, languages } from '../../models/i18n.model';

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
