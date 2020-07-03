import { Cards } from '../models/dashboard.model';

export const invalidCardsMessage = 'The cards loading was failed';

export const defaultCards: Cards = {
    leftCards: [],
    rightCards: [],
};

export const applicationsCardTitle = 'Applications';
export const systemCardTitle = 'About the system';
export const homeWiFiCardTitle = 'Home segment';
export const guestWiFiCardTitle = 'Guest segment';
export const networkPortsCardTitle = 'Network ports';
export const internetCardTitle = 'Internet';

export enum cardTypes {
    applicationType = 'applicationType',
    systemType = 'systemType',
    wifiType = 'wifiType',
    portType = 'portType',
    internetType = 'internetType',
}
export enum connectionTypes {
    wired = 'wired',
    wifi = 'wifi',
}

export const wifiConnectionTypeMessage = 'Wi-Fi';
export const wiredConnectionTypeMessage = 'Wired';

export const connectionTypeMessages = {
    [connectionTypes.wifi]: wifiConnectionTypeMessage,
    [connectionTypes.wired]: wiredConnectionTypeMessage,
};

export const channgelLabel = 'Channel';
export const showConnectionInfoButtonLabel = 'Show connection info';
export const onlineDeviceTitle = 'Online devices';

export const updateActiveParamsInterval = 1000;

export enum trafficType {
    upload = 'upload',
    download = 'download',
}

export enum internetDetailsType {
    default = 'default',
    reboot = 'reboot',
    configuration = 'configuration',
    related = 'related',
    dynamic = 'dynamic',
}
