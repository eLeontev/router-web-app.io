import React from 'react';

import {
    useGetCommonValues,
    useGetConnectionValues,
    useGetLimitsValues,
} from '../../../hooks/device-list-cell-data.hook';

import { getCommonIndicatorClassName } from '../../../services/devices-list.service';

import {
    CellRenderTypes,
    columnTypes,
    CommonColumnData,
    CommonWithIndicatorColumnData,
    ConnectionColumnData,
    LimitsColumnData,
} from '../../../models/devices-list.model';

const contentRenderer = (
    mainValue: string,
    additionalValue: string,
    mainContentClassModifier: string = '',
    children: JSX.Element | null = null
) => (
    <>
        <p className={`content-main ${mainContentClassModifier}`}>
            {children}
            {mainValue}
        </p>
        <p className="content-addition">{additionalValue}</p>
    </>
);

const CommonCellRender = (props: CommonColumnData) => {
    const [mainValue, additionalValue, classModifier] = useGetCommonValues(props);
    return contentRenderer(mainValue, additionalValue, classModifier);
};

const CommonWithIndicatorCellRender = ({
    isOnline,
    mainValue,
    additionalValue,
}: CommonWithIndicatorColumnData) => {
    return (
        <>
            <section className={getCommonIndicatorClassName(isOnline)}></section>
            {CommonCellRender({ mainValue, additionalValue })}
        </>
    );
};

const connectionPowerRenderer = (isWired: boolean, connectionPower: number) =>
    isWired ? (
        <span className={`connection-power connection-power__level-${connectionPower}`}></span>
    ) : null;

const ConnectionCellRender = (props: ConnectionColumnData) => {
    const { isWired, connectionPower } = props;
    const [mainValue, additionValue] = useGetConnectionValues(props);
    return contentRenderer(
        mainValue,
        additionValue,
        '',
        connectionPowerRenderer(isWired, connectionPower)
    );
};

export const LimitsCellRender = (props: LimitsColumnData) => {
    const [mainValue, additionValue] = useGetLimitsValues(props);
    return contentRenderer(mainValue, additionValue);
};

export const cellRenderTypes: CellRenderTypes = {
    [columnTypes.commonType]: CommonCellRender,
    [columnTypes.commonWithIndicatorType]: CommonWithIndicatorCellRender,
    [columnTypes.connectionType]: ConnectionCellRender,
    [columnTypes.limitsType]: LimitsCellRender,
};
