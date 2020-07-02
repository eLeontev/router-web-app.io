import React, { useEffect, useMemo, useState } from 'react';
import {
    CardProps,
    DynamicParamProps,
    SystemCard,
    SystemParam,
    SystemParams,
} from '../../../models/dashboard.model';
import { splitSystemParams } from '../../../services/system-card.service';
import { updateParamsMock } from '../../../mock/system-params.mock';
import { updateActiveParamsInterval } from '../../../constants/cards.constants';

export const ParamRenderer = ({ label, value }: SystemParam) => (
    <section className="param-pair">
        <p className="param-pair__label">{label}</p>
        <p className="param-pair__value">{value}</p>
    </section>
);

export const renderSystemParams = (systemParams: SystemParams) =>
    systemParams.map((systemParam: SystemParam) => (
        <ParamRenderer key={systemParam.label} {...systemParam} />
    ));

export const DynamicParams = ({ systemParams, startedTime }: DynamicParamProps) => {
    const [params, updateParams] = useState(systemParams);

    useEffect(() => {
        const timerId = setInterval(() => {
            updateParamsMock(params, updateParams, startedTime);
        }, updateActiveParamsInterval);
        return () => clearInterval(timerId);
    }, [updateParams, params, startedTime]);

    return <>{renderSystemParams(params)}</>;
};

export const SystemCardComponent = (props: CardProps) => {
    const {
        title,
        cardContent: { systemParams, startedTime },
    } = props.card as SystemCard;

    const { staticSystemParams, dynamicSystemParams } = useMemo(
        () => splitSystemParams(systemParams),
        [systemParams]
    );
    return (
        <section className="application-card">
            <h3 className="card__title">{title}</h3>
            <section className="card-content">
                {renderSystemParams(staticSystemParams)}
                <DynamicParams systemParams={dynamicSystemParams} startedTime={startedTime} />
            </section>
        </section>
    );
};
