import { deviceListTableNoElementLabels } from '../constants/devices-list.constants';

import { DropdownOptions, Option, Options } from '../models/common.model';
import { Labels } from '../models/i18n.model';
import {
    DeviceDataRows,
    deviceListTableTypes,
    deviceTableLabels,
    SpeedValue,
} from '../models/devices-list.model';

export const getDropdownOptions = (
    options: Options<Labels>,
    i18nOptionLabels: Array<string>,
    filterId: string
): DropdownOptions<string> =>
    options.map(({ id }: Option<Labels>, i: number) => ({
        id,
        label: i18nOptionLabels[i],
        isSelected: id === filterId,
    }));

export const getDeviceListTableMockData = (deviceDataRows: DeviceDataRows): DeviceDataRows =>
    deviceDataRows.map((columns) => [
        ...columns.map((column) => ({
            columnType: column.columnType,
            columnData: { ...column.columnData },
        })),
    ]);

export const getDeviceTableNoElementLabelByType = (type: deviceListTableTypes): deviceTableLabels =>
    deviceListTableNoElementLabels[type];

export const getRouterName = (additionalValue: string | deviceTableLabels) =>
    additionalValue === deviceTableLabels.viaRouterLabel ? ' Speedster' : '';

export const getCommonClassModifier = (mainValue: string | deviceTableLabels) =>
    mainValue === deviceTableLabels.noNameLabel ? 'content-main__grayed' : '';

export const getCommonIndicatorClassName = (isOnline: boolean) =>
    `content-indicator content-indicator__${isOnline ? 'online' : 'offline'}`;

export const getLabels = (values: Array<SpeedValue>): Array<deviceTableLabels> =>
    values.map((value) => (value && value.unitId) || '') as Array<deviceTableLabels>;
