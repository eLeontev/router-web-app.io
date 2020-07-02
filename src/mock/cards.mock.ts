import {
    applicationsCardTitle,
    cardTypes,
    connectionTypes,
    guestWiFiCardTitle,
    homeWiFiCardTitle,
    systemCardTitle,
} from '../constants/cards.constants';
import {
    ApplicationsCard,
    Cards,
    paramTypes,
    SystemCard,
    WiFiCard,
} from '../models/dashboard.model';
import { connectionActionTypes, modalContentTypes } from '../constants/modal.constants';

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
        startedTime: '7/2/2020',
        systemParams: [
            {
                label: 'Model',
                value: 'Speedster (KN-3010)',
                isActive: false,
                paramType: paramTypes.inactive,
            },
            {
                label: 'Service tag',
                value: '067-483-550-015-477',
                isActive: false,
                paramType: paramTypes.inactive,
            },
            {
                label: 'OS version',
                value: '3.4.6',
                isActive: false,
                paramType: paramTypes.inactive,
            },
            {
                label: 'Auto-update',
                value: 'Enabled',
                isActive: false,
                paramType: paramTypes.inactive,
            },
            {
                label: 'Uptime',
                value: '',
                isActive: true,
                paramType: paramTypes.uptime,
            },
            {
                label: 'Current time',
                value: '',
                isActive: true,
                paramType: paramTypes.currentTime,
            },
            {
                label: 'CPU usage',
                value: '4%',
                isActive: true,
                paramType: paramTypes.cpuUsage,
            },
            {
                label: 'RAM usage',
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
