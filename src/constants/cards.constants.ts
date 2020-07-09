import { Cards } from '../models/dashboard.model';

export const invalidCardsMessage = 'The cards loading was failed';

export const defaultCards: Cards = {
    leftCards: [],
    rightCards: [],
};

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

export const updateActiveParamsInterval = 1000;
export const internetRequestDelay = 3000;

export enum trafficType {
    upload = 'upload',
    download = 'download',
}

export const trafficTimeFormat = 'HH:mm';

export enum internetDetailsType {
    default = 'default',
    reboot = 'reboot',
    configuration = 'configuration',
    download = 'download',
    upload = 'upload',
    sent = 'sent',
    received = 'received',
}

export const mModifier = 1000;
export const bModifier = 1;

export const countOfDisplayedNodes = 100;
