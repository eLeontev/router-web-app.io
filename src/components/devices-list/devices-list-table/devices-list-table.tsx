import React from 'react';
import './devices-list-table.scss';

import { cellRenderTypes } from './devices-list-table-cell.renderers';

import { useGetTranslatedLabel, useGetTranslatedLabels } from '../../../services/i18n.service';
import { getDeviceTableNoElementLabelByType } from '../../../services/devices-list.service';

import { columns } from '../../../constants/devices-list.constants';

import {
    columnLabels,
    columnTypes,
    DeviceDataCells,
    DeviceDataColumn,
    DeviceDataRows,
    deviceListTableTypes,
} from '../../../models/devices-list.model';

export type DeviceListHeaderProps = {
    columns: Array<columnLabels>;
};
export type DevicesListTableProps = {
    rows: DeviceDataRows;
    type: deviceListTableTypes;
};

export const headCellRenderer = (label: string, index: number) => (
    <section key={index} className="device-list-table__header-cell">
        <h3 className="device-list-table__header-cell-title">{label}</h3>
    </section>
);

export const DeviceListHeader = ({ columns }: DeviceListHeaderProps) => {
    const i18nHeaders = useGetTranslatedLabels(columns);
    return (
        <section className="device-list-table__header">{i18nHeaders.map(headCellRenderer)}</section>
    );
};
export const deviceCellRenderer = (
    { columnData, columnType }: DeviceDataColumn<columnTypes>,
    index: number
) => (
    <section key={index} className="device-list-table__cell">
        {(cellRenderTypes[columnType] as any)(columnData)}
    </section>
);

export const deviceListRow = (cells: DeviceDataCells, index: number) => (
    <section key={index} className="device-list-table__row">
        {cells.map(deviceCellRenderer)}
    </section>
);

export const DevicesListTable = ({ rows, type }: DevicesListTableProps) => {
    const i18nLabel = useGetTranslatedLabel(getDeviceTableNoElementLabelByType(type));

    return rows.length ? (
        <section className="device-list-table">
            <DeviceListHeader columns={columns} />
            <section className="device-list-table__content">{rows.map(deviceListRow)}</section>
        </section>
    ) : (
        <section className="device-list-table__no-content">{i18nLabel}</section>
    );
};
