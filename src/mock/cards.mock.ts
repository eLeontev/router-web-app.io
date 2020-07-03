import {
    applicationsCardTitle,
    cardTypes,
    connectionTypes,
    guestWiFiCardTitle,
    homeWiFiCardTitle,
    internetCardTitle,
    internetDetailsType,
    networkPortsCardTitle,
    systemCardTitle,
    trafficType,
} from '../constants/cards.constants';
import {
    ApplicationsCard,
    Cards,
    InternetCard,
    NetworkPortsCard,
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

const startedTime = '7/2/2020';
export const systemCatrd: SystemCard = {
    cardId: 'systemCatrd_1',
    type: cardTypes.systemType,
    title: systemCardTitle,
    cardContent: {
        startedTime,
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

export const networkPortsCard: NetworkPortsCard = {
    cardId: 'networkPorts-1',
    type: cardTypes.portType,
    title: networkPortsCardTitle,
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
    title: internetCardTitle,
    cardContent: {
        main: {
            startedTime,
            provider: {
                providerLabel: 'Using Ethernet',
                providerType: 'PPPoE',
            },
            traffic: {
                download: {
                    current: {
                        unit: 'Mbit/s',
                        value: 10.12,
                    },
                    max: {
                        unit: 'Mbit/s',
                        value: 100,
                    },
                    type: trafficType.download,
                },
                upload: {
                    current: {
                        unit: 'kbit/s',
                        value: 281,
                    },
                    max: {
                        unit: 'Mbit/s',
                        value: 50,
                    },
                    type: trafficType.upload,
                },
            },
        },
        details: [
            {
                label: 'Status',
                type: internetDetailsType.reboot,
                value: 'Connection established',
            },
            {
                label: 'Internet safety',
                type: internetDetailsType.configuration,
                value: 'AdGuard DNS is enabled',
            },
            {
                label: 'Authentication type',
                type: internetDetailsType.default,
                value: 'PPPoE',
            },
            {
                label: 'IP address',
                type: internetDetailsType.default,
                value: '192.168.1.1',
            },
            {
                label: 'Subnet mask',
                type: internetDetailsType.default,
                value: '125.125.125.125',
            },
            {
                label: 'MAC Address',
                type: internetDetailsType.default,
                value: '13:ld:78:c1:5d:09',
            },
            {
                label: 'Download',
                type: internetDetailsType.related,
                value: trafficType.download,
            },
            {
                label: 'Upload',
                type: internetDetailsType.related,
                value: trafficType.upload,
            },
            {
                label: 'Received',
                type: internetDetailsType.dynamic,
                value: '54 Gbytes',
            },
            {
                label: 'Sent',
                type: internetDetailsType.dynamic,
                value: '11.5 Gbytes',
            },
            {
                label: 'DNS servers',
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
