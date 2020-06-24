import {
    cardTypes,
    applicationsCardTitle,
    systemCardTitle,
    homeWiFiCardTitle,
    connectionTypes,
    guestWiFiCardTitle,
} from '../constants/cards.constants';
import {
    ApplicationsCard,
    SystemCard,
    WiFiCard,
    Cards,
} from '../models/cards.models';
import {
    connectionActionTypes,
    modalContentTypes,
} from '../constants/modal.constants';

export const applicationsCatrd: ApplicationsCard = {
    cardId: 'applicationsCatrd_1',
    type: cardTypes.applicationType,
    title: applicationsCardTitle,
    cardContent: {
        applications: [],
    },
};

export const systemCatrd: SystemCard = {
    cardId: 'systemCatrd_1',
    type: cardTypes.systemType,
    title: systemCardTitle,
    cardContent: {
        systemParams: [
            {
                label: 'Model',
                value: 'Speedster (KN-3010)',
            },
            {
                label: 'Service tag',
                value: '067-483-550-015-477',
            },
            {
                label: 'OS version',
                value: '3.4.6',
            },
            {
                label: 'Auto-update',
                value: 'Enabled',
            },
            {
                label: 'Uptime',
                value: '3 days 01:33:01',
            },
            {
                label: 'Current time',
                value: '6/21/2020 17:50:20',
            },
            {
                label: 'CPU usage',
                value: '4%',
            },
            {
                label: 'RAM usage',
                value: '40% (51/128 Mbytes)',
            },
        ],
    },
};

export const homeWiFiCard: WiFiCard = {
    cardId: 'homeWiFiCard_ 1',
    type: cardTypes.wifiType,
    title: homeWiFiCardTitle,
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
    title: guestWiFiCardTitle,
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

export const cardsMocks: Cards = {
    leftCards: [applicationsCatrd, systemCatrd],
    rightCards: [homeWiFiCard, guestWiFiCard],
};
