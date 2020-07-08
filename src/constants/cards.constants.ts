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

export enum cardsLabels {
    channelLabel = 'channelLabel',
    showConnectionInfoButtonLabel = 'showConnectionInfoButtonLabel',
    download = 'download',
    upload = 'upload',
    providerHeaderLabel = 'providerHeaderLabel',
    moreDetailsLabel = 'moreDetailsLabel',
    hiddenDetailsLabel = 'hiddenDetailsLabel',
    applicationsCardTitleLabel = 'applicationsCardTitleLabel',
    systemCardTitleLabel = 'systemCardTitleLabel',
    homeWiFiCardTitleLabel = 'homeWiFiCardTitleLabel',
    guestWiFiCardTitleLabel = 'guestWiFiCardTitleLabel',
    networkPortsCardTitleLabel = 'networkPortsCardTitleLabel',
    internetCardTitleLabel = 'internetCardTitleLabel',
    hasNoApplicationsMessageLabel = 'hasNoApplicationsMessageLabel',
    onlineDeviceTitleLabel = 'onlineDeviceTitleLabel',
    wifiConnectionTypeMessageLabel = 'wifiConnectionTypeMessageLabel',
    wiredConnectionTypeMessageLabel = 'wiredConnectionTypeMessageLabel',
    connectedLabel = 'connectedLabel',
    daysLabel = 'daysLabel',

    modelLabel = 'modelLabel',
    serviceTagLabel = 'serviceTagLabel',
    osVersionLabel = 'osVersionLabel',
    autoUpdateLabel = 'autoUpdateLabel',
    upTimeLabel = 'upTimeLabel',
    currentTimeLabel = 'currentTimeLabel',
    cpuUsageLabel = 'cpuUsageLabel',
    ramUsageLabel = 'ramUsageLabel',

    enabledLabel = 'enabledLabel',
    kbitsLabel = 'kbitsLabel',
    mbitsLabel = 'mbitsLabel',
    mbitLabel = 'mbitLabel',

    usingEthernetLabel = 'usingEthernetLabel',

    statusLabel = 'statusLabel',
    internetSafetyLabel = 'internetSafetyLabel',
    authenticationTypeLabel = 'authenticationTypeLabel',
    ipAddressLabel = 'ipAddressLabel',
    subnetMaskLabel = 'subnetMaskLabel',
    macAddressLabel = 'macAddressLabel',
    downloadLabel = 'downloadLabel',
    uploadLabel = 'uploadLabel',
    receivedLabel = 'receivedLabel',
    sentLabel = 'sentLabel',
    dnsServersLabel = 'dnsServersLabel',

    connectionEstablishedLabel = 'connectionEstablishedLabel',
    rebootLabel = 'rebootLabel',
    configureLabel = 'configureLabel',
    adGuardIsEnabledLabel = 'adGuardIsEnabledLabel',
}
