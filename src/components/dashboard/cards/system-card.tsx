import React, { useEffect, useMemo, useState } from 'react';
import {
    CardContent,
    DynamicParamProps,
    SystemCardContent,
    SystemParam,
    SystemParams,
} from '../../../models/dashboard.model';
import { splitSystemParams } from '../../../services/system-card.service';
import { updateParamsMock } from '../../../services/system-params.service';
import { cardsLabels, updateActiveParamsInterval } from '../../../constants/cards.constants';
import { useGetTranslatedLabels } from '../../../services/i18n.service';

export const ParamRenderer = React.memo(({ label, value }: SystemParam) => {
    const [i18nLabel, i18nValue] = useGetTranslatedLabels([label, value as cardsLabels]);
    return (
        <section className="param-pair">
            <p className="param-pair__label">{i18nLabel}</p>
            <p className="param-pair__value">{i18nValue || value}</p>
        </section>
    );
});

export const renderSystemParams = (systemParams: SystemParams) =>
    systemParams.map((systemParam: SystemParam) => (
        <ParamRenderer key={systemParam.label} {...systemParam} />
    ));

export const DynamicParams = ({ systemParams, startedTime }: DynamicParamProps) => {
    const [params, updateParams] = useState(systemParams);
    const [daysLabel, mbitLabel] = useGetTranslatedLabels([
        cardsLabels.daysLabel,
        cardsLabels.mbitLabel,
    ]);

    useEffect(() => {
        const timerId = setInterval(() => {
            updateParamsMock(params, updateParams, startedTime, daysLabel, mbitLabel);
        }, updateActiveParamsInterval);
        return () => clearInterval(timerId);
    }, [updateParams, params, startedTime, daysLabel, mbitLabel]);

    return <>{renderSystemParams(params)}</>;
};

export const SystemCardComponent = (cardContent: CardContent) => {
    const { systemParams, startedTime } = cardContent as SystemCardContent;

    const { staticSystemParams, dynamicSystemParams } = useMemo(
        () => splitSystemParams(systemParams),
        [systemParams]
    );
    return (
        <section className="card-content">
            {renderSystemParams(staticSystemParams)}
            <DynamicParams systemParams={dynamicSystemParams} startedTime={startedTime} />
        </section>
    );
};
