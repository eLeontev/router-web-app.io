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

export enum devicesDynamicListLabels {
    speedValueRangeErrorLabel = 'speedValueRangeErrorLabel',
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

export type AsymmetricSetting = {
    isAsymmetric: boolean;
};

export type LimitsSettings = {
    common: SpeedValue;
    upload: SpeedValue;
    download: SpeedValue;
};

export type DeviceSettings = AsymmetricSetting & {
    filterId: string;
    speedLimits: LimitsSettings;
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

export enum columnLabels {
    deviceLabel = 'deviceLabel',
    addressLabel = 'addressLabel',
    segmentLabel = 'segmentLabel',
    connectionLabel = 'connectionLabel',
    limitsLabel = 'limitsLabel',
}

export enum deviceTableLabels {
    viaRouterLabel = 'viaRouterLabel',
    noNameLabel = 'noNameLabel',
    homeSegmentLabel = 'homeSegmentLabel',
    guestSegmentLabel = 'guestSegmentLabel',
    wiredLabel = 'wiredLabel',
    segment2GHzLabel = 'segment2GHzLabel',
    segment5GHzLabel = 'segment5GHzLabel',
    MGzLabel = 'MGzLabel',
    portLabel = 'portLabel',
    hasNoUnregisteredDevicesLabel = 'hasNoUnregisteredDevicesLabel',
    hasNoRegisteredDevicesLabel = 'hasNoRegisteredDevicesLabel',
    hasNoBlockedDevicesLabel = 'hasNoBlockedDevicesLabel',
}

export enum columnTypes {
    commonType = 'commonType',
    commonWithIndicatorType = 'commonWithIndicatorType',
    connectionType = 'connectionType',
    limitsType = 'limitsType',
}

export type CommonColumnData = {
    mainValue: deviceTableLabels | string;
    additionalValue: deviceTableLabels | string;
};

export type CommonWithIndicatorColumnData = CommonColumnData & {
    isOnline: boolean;
};

export type ConnectionColumnData = {
    speedValue: SpeedValue;
    isWired: boolean;
    connectionPower: number;
    connectionType: string;
    wirelessUnitLabel: deviceTableLabels;
};

export type LimitsColumnData = AsymmetricSetting &
    LimitsSettings & {
        isLimited: boolean;
    };

export type DeviceDataColumn<T extends columnTypes> = {
    columnType: columnTypes;
    columnData: T extends columnTypes.commonType
        ? CommonColumnData
        : T extends columnTypes.commonWithIndicatorType
        ? CommonWithIndicatorColumnData
        : T extends columnTypes.connectionType
        ? ConnectionColumnData
        : T extends columnTypes.limitsType
        ? LimitsColumnData
        : never;
};
export type DeviceDataCell = Array<DeviceDataColumn<columnTypes>>;

export type DeviceDataCells = DeviceDataCell;
export type DeviceDataRows = Array<DeviceDataCells>;

export type Renderer<T extends columnTypes> = (
    cellData: T extends columnTypes.commonType
        ? CommonColumnData
        : T extends columnTypes.commonWithIndicatorType
        ? CommonWithIndicatorColumnData
        : T extends columnTypes.connectionType
        ? ConnectionColumnData
        : T extends columnTypes.limitsType
        ? LimitsColumnData
        : never
) => void;

export type CellRenderTypes = {
    [columnTypes.commonType]: Renderer<columnTypes.commonType>;
    [columnTypes.commonWithIndicatorType]: Renderer<columnTypes.commonWithIndicatorType>;
    [columnTypes.connectionType]: Renderer<columnTypes.connectionType>;
    [columnTypes.limitsType]: Renderer<columnTypes.limitsType>;
};

export enum deviceListTableTypes {
    blockedType = 'blockedType',
    registeredType = 'registeredType',
    unregisteredType = 'unregisteredType',
}

export type DeviceListTableNoElementLabels = {
    [type in deviceListTableTypes]: deviceTableLabels;
};
