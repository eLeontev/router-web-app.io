import {
    columnLabels,
    DeviceListTableNoElementLabels,
    devicesListLabels,
    deviceTableLabels,
} from '../models/devices-list.model';
import { Options } from '../models/common.model';
import { cardsLabels } from '../models/cards.model';

export const filterOptions: Options<devicesListLabels> = [
    {
        id: '123',
        label: devicesListLabels.withoutFilteringLabel,
    },
    {
        id: '321',
        label: devicesListLabels.withoutADCLabel,
    },
    {
        id: '431',
        label: devicesListLabels.familyLabel,
    },
];

export const speedOptions: Options<cardsLabels> = [
    {
        id: '123',
        label: cardsLabels.kbitsLabel,
    },
    {
        id: '321',
        label: cardsLabels.mbitsLabel,
    },
];

export const speedRange = [64, 1000000];
export const macAddressLength = 12;

export const columns: Array<columnLabels> = [
    columnLabels.deviceLabel,
    columnLabels.addressLabel,
    columnLabels.segmentLabel,
    columnLabels.connectionLabel,
    columnLabels.limitsLabel,
];

export const deviceListTableNoElementLabels: DeviceListTableNoElementLabels = {
    blockedType: deviceTableLabels.hasNoBlockedDevicesLabel,
    registeredType: deviceTableLabels.hasNoRegisteredDevicesLabel,
    unregisteredType: deviceTableLabels.hasNoUnregisteredDevicesLabel,
};

export const deviceTableContentUpdateDelay = 2000;
