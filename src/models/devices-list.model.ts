import { SetterOrUpdater } from 'recoil';

export enum devicesListLabels {
    titleLabel = 'titleLabel',
    descriptionLabel = 'descriptionLabel',
    unregisteredDevicesTitleLabel = 'unregisteredDevicesTitleLabel',
    unregisteredDevicesDescriptionLabel = 'unregisteredDevicesDescriptionLabel',
    registeredDevicesTitleLabel = 'registeredDevicesTitleLabel',
    blockedDevicesTitleLabel = 'blockedDevicesTitleLabel',
    blockedDevicesDescriptionLabel = 'blockedDevicesDescriptionLabel',
    addDeviceButtonLabel = 'addDeviceButtonLabel',
    displayDeviceSettingsLabel = 'displayDeviceSettingsLabel',
    hideDeviceSettingsLabel = 'hideDeviceSettingsLabel',
    settingsDescriptionLabel = 'settingsDescriptionLabel',
    withoutFilteringLabel = 'withoutFilteringLabel',
    withoutADCLabel = 'withoutADCLabel',
    familyLabel = 'familyLabel',
    speedLimitLabel = 'speedLimitLabel',
    asymmetricLabel = 'asymmetricLabel',
}

export enum speedKeys {
    common = 'common',
    upload = 'upload',
    download = 'download',
}

export type SpeedValue = {
    value: number;
    unitId: string;
};

export type DeviceSettings = {
    isAsymmetric: boolean;
    filterId: string;
    speedLimits: {
        common: SpeedValue;
        upload: SpeedValue;
        download: SpeedValue;
    };
};

export type DevicesSetting<T> = {
    set: SetterOrUpdater<T>;
    state: T;
};

export type DeviceSettingsStates =
    | DevicesSetting<boolean>
    | DevicesSetting<string>
    | DevicesSetting<SpeedValue>;

export type DevicesSettings = Array<DeviceSettingsStates>;
