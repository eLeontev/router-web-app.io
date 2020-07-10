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
};
