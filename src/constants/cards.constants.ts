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

export const channelLabel = 'Channel';
export const showConnectionInfoButtonLabel = 'Show connection info';
export const onlineDeviceTitle = 'Online devices';

export const updateActiveParamsInterval = 1000;
export const internetRequestDelay = 3000;

export enum trafficType {
    upload = 'upload',
    download = 'download',
}

export const trafficTypeLabel: { [label in trafficType]: string } = {
    [trafficType.download]: 'Download',
    [trafficType.upload]: 'Upload',
};

export enum internetDetailsType {
    default = 'default',
    reboot = 'reboot',
    configuration = 'configuration',
    download = 'download',
    upload = 'upload',
    sent = 'sent',
    received = 'received',
}

export const providerHeaderLabel = 'Provider';

export const moreDetailsLabel = 'More details';
export const hiddenDetailsLabel = 'Hide details';

export const units = ['kbit/s', 'Mbit/s'];
export const countOfDisplayedNodes = 100;
