import { cardsLabels } from '../models/cards.model';
import {
    columnTypes,
    DeviceDataColumn,
    DeviceDataRows,
    DeviceSettings,
    deviceTableLabels,
    LimitsColumnData,
} from '../models/devices-list.model';

export const deviceSettings: DeviceSettings = {
    isAsymmetric: false,
    filterId: '431',
    speedLimits: {
        common: {
            value: 0,
            unitId: '123',
        },
        upload: {
            value: 0,
            unitId: '123',
        },
        download: {
            value: 0,
            unitId: '123',
        },
    },
};

export const commonHostColumnData: DeviceDataColumn<columnTypes.commonWithIndicatorType> = {
    columnType: columnTypes.commonWithIndicatorType,
    columnData: {
        mainValue: 'DESKTOP-5123dasR1',
        additionalValue: deviceTableLabels.viaRouterLabel,
        isOnline: true,
    },
};
export const commonHostColumnWithoutNameData: DeviceDataColumn<columnTypes.commonWithIndicatorType> = {
    columnType: columnTypes.commonWithIndicatorType,
    columnData: {
        mainValue: deviceTableLabels.noNameLabel,
        additionalValue: deviceTableLabels.viaRouterLabel,
        isOnline: true,
    },
};
export const commonHostColumnWithoutLabelData: DeviceDataColumn<columnTypes.commonWithIndicatorType> = {
    columnType: columnTypes.commonWithIndicatorType,
    columnData: {
        mainValue: 'DL1213AL3',
        additionalValue: '',
        isOnline: false,
    },
};

export const commonAddress1ColumnData: DeviceDataColumn<columnTypes.commonType> = {
    columnType: columnTypes.commonType,
    columnData: {
        mainValue: '192.168.1.101',
        additionalValue: '54:1w:12:31:gD:01',
    },
};
export const commonAddress2ColumnData: DeviceDataColumn<columnTypes.commonType> = {
    columnType: columnTypes.commonType,
    columnData: {
        mainValue: '192.168.1.13',
        additionalValue: '12:g3:04:11:dd:02',
    },
};
export const commonAddress3ColumnData: DeviceDataColumn<columnTypes.commonType> = {
    columnType: columnTypes.commonType,
    columnData: {
        mainValue: '192.168.1.32',
        additionalValue: '66:a1:5R:0t:12:55',
    },
};

export const segment5GHzColumnData: DeviceDataColumn<columnTypes.commonType> = {
    columnType: columnTypes.commonType,
    columnData: {
        mainValue: deviceTableLabels.homeSegmentLabel,
        additionalValue: deviceTableLabels.wiredLabel,
    },
};
export const segment2GHzColumnData: DeviceDataColumn<columnTypes.commonType> = {
    columnType: columnTypes.commonType,
    columnData: {
        mainValue: deviceTableLabels.homeSegmentLabel,
        additionalValue: deviceTableLabels.segment5GHzLabel,
    },
};
export const segmentWiredColumnData: DeviceDataColumn<columnTypes.commonType> = {
    columnType: columnTypes.commonType,
    columnData: {
        mainValue: deviceTableLabels.guestSegmentLabel,
        additionalValue: deviceTableLabels.segment2GHzLabel,
    },
};

export const connectionWired2GHzColumnData: DeviceDataColumn<columnTypes.connectionType> = {
    columnType: columnTypes.connectionType,
    columnData: {
        isWired: true,
        speedValue: {
            unitId: cardsLabels.mbitsLabel,
            value: 54,
        },
        connectionPower: 2,
        connectionType: '11n 1x1 40',
        wirelessUnitLabel: deviceTableLabels.MGzLabel,
    },
};
export const connectionWirelessColumnData: DeviceDataColumn<columnTypes.connectionType> = {
    columnType: columnTypes.connectionType,
    columnData: {
        isWired: false,
        speedValue: {
            unitId: cardsLabels.mbitsLabel,
            value: 100,
        },
        connectionPower: 0,
        connectionType: '1',
        wirelessUnitLabel: deviceTableLabels.portLabel,
    },
};
export const connectionWired5GHzColumnData: DeviceDataColumn<columnTypes.connectionType> = {
    columnType: columnTypes.connectionType,
    columnData: {
        isWired: true,
        speedValue: {
            unitId: cardsLabels.mbitsLabel,
            value: 520,
        },
        connectionPower: 0,
        connectionType: '11ac/k/r/v 1x1 80',
        wirelessUnitLabel: deviceTableLabels.MGzLabel,
    },
};

export const limitsWithSymmetricLimitColumnData: DeviceDataColumn<columnTypes.limitsType> = {
    columnType: columnTypes.limitsType,
    columnData: {
        isLimited: true,
        isAsymmetric: false,
        common: {
            unitId: cardsLabels.mbitsLabel,
            value: 10,
        },
    } as LimitsColumnData,
};
export const limitsWithAsymmetricLimitColumnData: DeviceDataColumn<columnTypes.limitsType> = {
    columnType: columnTypes.limitsType,
    columnData: {
        isLimited: true,
        isAsymmetric: true,
        download: {
            unitId: cardsLabels.mbitsLabel,
            value: 12,
        },
        upload: {
            unitId: cardsLabels.kbitsLabel,
            value: 5,
        },
    } as LimitsColumnData,
};

export const limitsNotDefinedColumnData: DeviceDataColumn<columnTypes.limitsType> = {
    columnType: columnTypes.limitsType,
    columnData: {
        isLimited: false,
    } as LimitsColumnData,
};

export const unregisteredDeviceListDataMock: DeviceDataRows = [
    [
        commonHostColumnData,
        commonAddress1ColumnData,
        segment5GHzColumnData,
        connectionWired2GHzColumnData,
        limitsWithAsymmetricLimitColumnData,
    ],
    [
        commonHostColumnWithoutNameData,
        commonAddress2ColumnData,
        segment2GHzColumnData,
        connectionWirelessColumnData,
        limitsWithSymmetricLimitColumnData,
    ],
    [
        commonHostColumnWithoutLabelData,
        commonAddress3ColumnData,
        segmentWiredColumnData,
        connectionWired5GHzColumnData,
        limitsNotDefinedColumnData,
    ],
];
