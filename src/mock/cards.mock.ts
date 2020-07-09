import {
    cardTypes,
    connectionTypes,
    internetDetailsType,
    trafficType,
} from '../constants/cards.constants';
import { connectionActionTypes, modalContentTypes } from '../constants/modal.constants';

import { cardsLabels } from '../models/cards.model';
import {
    ApplicationsCard,
    Cards,
    InternetCard,
    NetworkPortsCard,
    paramTypes,
    SystemCard,
    WiFiCard,
} from '../models/dashboard.model';

export const applicationsCatrd: ApplicationsCard = {
    cardId: 'applicationsCatrd_1',
    type: cardTypes.applicationType,
    title: cardsLabels.applicationsCardTitleLabel,
    cardContent: {
        applications: [],
    },
};

const startedTime = '7/2/2020';
export const systemCatrd: SystemCard = {
    cardId: 'systemCatrd_1',
    type: cardTypes.systemType,
    title: cardsLabels.systemCardTitleLabel,
    cardContent: {
        startedTime,
        systemParams: [
            {
                label: cardsLabels.modelLabel,
                value: 'Speedster (KN-3010)',
                isActive: false,
                paramType: paramTypes.inactive,
            },
            {
                label: cardsLabels.serviceTagLabel,
                value: '067-483-550-015-477',
                isActive: false,
                paramType: paramTypes.inactive,
            },
            {
                label: cardsLabels.osVersionLabel,
                value: '3.4.6',
                isActive: false,
                paramType: paramTypes.inactive,
            },
            {
                label: cardsLabels.autoUpdateLabel,
                value: 'enabledLabel',
                isActive: false,
                paramType: paramTypes.inactive,
            },
            {
                label: cardsLabels.upTimeLabel,
                value: '',
                isActive: true,
                paramType: paramTypes.uptime,
            },
            {
                label: cardsLabels.currentTimeLabel,
                value: '',
                isActive: true,
                paramType: paramTypes.currentTime,
            },
            {
                label: cardsLabels.cpuUsageLabel,
                value: '4%',
                isActive: true,
                paramType: paramTypes.cpuUsage,
            },
            {
                label: cardsLabels.ramUsageLabel,
                value: '40% (51/128 Mbytes)',
                isActive: true,
                paramType: paramTypes.ramUsage,
            },
        ],
    },
};

export const homeWiFiCard: WiFiCard = {
    cardId: 'homeWiFiCard_ 1',
    type: cardTypes.wifiType,
    title: cardsLabels.homeWiFiCardTitleLabel,
    cardContent: {
        connections: [
            {
                connectionId: 'connection_1',
                name: 'Keenetic-9672',
                isActive: true,
                range: '2.4 GHz',
                channel: 9,
                connectionInfo: {
                    type: modalContentTypes.connectionContentType,
                    url: 'https://url.com/123',
                    credentials: {
                        networkId: 'N ET WO R K iD',
                        password: 'network password',
                    },
                    actions: {
                        WPS: {
                            actionType: connectionActionTypes.wpsType,
                            isActive: true,
                        },
                        main: [
                            {
                                actionType: connectionActionTypes.copyType,
                                isActive: true,
                            },
                            {
                                actionType: connectionActionTypes.printType,
                                isActive: true,
                            },
                            {
                                actionType: connectionActionTypes.addLogoType,
                                isActive: true,
                            },
                        ],
                    },
                },
            },
            {
                connectionId: 'connection_2',
                name: 'Keenetic-9672',
                isActive: true,
                range: '5 GHz',
                channel: 149,
                connectionInfo: {
                    type: modalContentTypes.connectionContentType,
                    url: 'https://url.com/1321',
                    credentials: {
                        networkId: 'N ET WO R K iD 321',
                        password: 'network password 321',
                    },
                    actions: {
                        WPS: {
                            actionType: connectionActionTypes.wpsType,
                            isActive: true,
                        },
                        main: [
                            {
                                actionType: connectionActionTypes.copyType,
                                isActive: true,
                            },
                            {
                                actionType: connectionActionTypes.printType,
                                isActive: true,
                            },
                            {
                                actionType: connectionActionTypes.addLogoType,
                                isActive: true,
                            },
                        ],
                    },
                },
            },
        ],
        onlineDevices: [
            {
                key: 'device_1',
                type: connectionTypes.wired,
                countOfConnections: 0,
                isHome: true,
            },
            {
                key: 'device_2',
                type: connectionTypes.wifi,
                countOfConnections: 6,
                isHome: true,
            },
        ],
    },
};

export const guestWiFiCard: WiFiCard = {
    cardId: 'guestWiFiCard_ 1',
    type: cardTypes.wifiType,
    title: cardsLabels.guestWiFiCardTitleLabel,
    cardContent: {
        connections: [
            {
                connectionId: 'connection_1',
                name: 'Guest',
                isActive: false,
                range: '2.4 GHz',
                channel: 9,
                connectionInfo: {
                    type: modalContentTypes.connectionContentType,
                    url: 'https://url.com/1321123123',
                    credentials: {
                        networkId: 'N ET WO R K iD 1231231',
                        password: 'network password 123123123',
                    },
                    actions: {
                        WPS: {
                            actionType: connectionActionTypes.wpsType,
                            isActive: false,
                        },
                        main: [
                            {
                                actionType: connectionActionTypes.copyType,
                                isActive: false,
                            },
                            {
                                actionType: connectionActionTypes.printType,
                                isActive: true,
                            },
                            {
                                actionType: connectionActionTypes.addLogoType,
                                isActive: true,
                            },
                        ],
                    },
                },
            },
            {
                connectionId: 'connection_2',
                name: 'Guest',
                isActive: false,
                range: '5 GHz',
                channel: 149,
                connectionInfo: {
                    type: modalContentTypes.connectionContentType,
                    url: 'https://url.com/1321123123',
                    credentials: {
                        networkId: 'N ET 6423',
                        password: 'network password 00123',
                    },
                    actions: {
                        WPS: {
                            actionType: connectionActionTypes.wpsType,
                            isActive: false,
                        },
                        main: [
                            {
                                actionType: connectionActionTypes.copyType,
                                isActive: false,
                            },
                            {
                                actionType: connectionActionTypes.printType,
                                isActive: true,
                            },
                            {
                                actionType: connectionActionTypes.addLogoType,
                                isActive: true,
                            },
                        ],
                    },
                },
            },
        ],
        onlineDevices: [
            {
                key: 'device_1',
                type: connectionTypes.wired,
                countOfConnections: 0,
                isHome: false,
            },
            {
                key: 'device_2',
                type: connectionTypes.wifi,
                countOfConnections: 0,
                isHome: false,
            },
        ],
    },
};

export const networkPortsCard: NetworkPortsCard = {
    cardId: 'networkPorts-1',
    type: cardTypes.portType,
    title: cardsLabels.networkPortsCardTitleLabel,
    cardContent: {
        networkPortId: 'port-id_0',
        ports: [
            {
                isActive: true,
                portId: 'port-id_0',
                portSpeed: 100,
                portType: 'FDX',
                portUnit: 'M',
            },
            {
                isActive: true,
                portId: 'port-id_1',
                portSpeed: 100,
                portType: 'FDX',
                portUnit: 'M',
            },
            {
                isActive: false,
                portId: 'port-id_2',
                portSpeed: 0,
                portType: '',
                portUnit: '',
            },
            {
                isActive: false,
                portId: 'port-id_3',
                portSpeed: 0,
                portType: '',
                portUnit: '',
            },
            {
                isActive: false,
                portId: 'port-id_4',
                portSpeed: 0,
                portType: '',
                portUnit: '',
            },
        ],
    },
};

export const internetCard: InternetCard = {
    cardId: 'internetCard_ 1',
    type: cardTypes.internetType,
    title: cardsLabels.internetCardTitleLabel,
    cardContent: {
        main: {
            startedTime,
            provider: {
                providerLabel: cardsLabels.usingEthernetLabel,
                providerType: 'PPPoE',
            },
            trafficInfo: {
                download: {
                    current: {
                        unit: cardsLabels.kbitsLabel,
                        value: 0,
                    },
                    max: {
                        unit: cardsLabels.mbitsLabel,
                        value: 100,
                    },
                    type: trafficType.download,
                },
                upload: {
                    current: {
                        unit: cardsLabels.kbitsLabel,
                        value: 0,
                    },
                    max: {
                        unit: cardsLabels.mbitsLabel,
                        value: 50,
                    },
                    type: trafficType.upload,
                },
            },
        },
        details: [
            {
                label: cardsLabels.statusLabel,
                type: internetDetailsType.reboot,
                value: cardsLabels.connectionEstablishedLabel,
            },
            {
                label: cardsLabels.internetSafetyLabel,
                type: internetDetailsType.configuration,
                value: cardsLabels.adGuardIsEnabledLabel,
            },
            {
                label: cardsLabels.authenticationTypeLabel,
                type: internetDetailsType.default,
                value: 'PPPoE',
            },
            {
                label: cardsLabels.ipAddressLabel,
                type: internetDetailsType.default,
                value: '192.168.1.1',
            },
            {
                label: cardsLabels.subnetMaskLabel,
                type: internetDetailsType.default,
                value: '125.125.125.125',
            },
            {
                label: cardsLabels.macAddressLabel,
                type: internetDetailsType.default,
                value: '13:ld:78:c1:5d:09',
            },
            {
                label: cardsLabels.downloadLabel,
                type: internetDetailsType.download,
                value: '',
            },
            {
                label: cardsLabels.uploadLabel,
                type: internetDetailsType.upload,
                value: '',
            },
            {
                label: cardsLabels.receivedLabel,
                type: internetDetailsType.received,
                value: 0,
            },
            {
                label: cardsLabels.sentLabel,
                type: internetDetailsType.sent,
                value: 0,
            },
            {
                label: cardsLabels.dnsServersLabel,
                type: internetDetailsType.default,
                value: '543.217.093.5',
            },
        ],
    },
};
export const cardsMocks: Cards = {
    leftCards: [internetCard, applicationsCatrd, systemCatrd],
    rightCards: [homeWiFiCard, guestWiFiCard, networkPortsCard],
};
