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

export enum cardTypes {
    applicationType = 'applicationType',
    systemType = 'systemType',
    wifiType = 'wifiType',
    portType = 'portType',
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
