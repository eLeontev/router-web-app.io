import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Button } from '../../common/button';

import { useGetTranslatedLabel, useGetTranslatedLabels } from '../../../services/i18n.service';
import { internetState } from '../../../recoil-state/internet.state';

import { internetDetailsType } from '../../../constants/cards.constants';

import { InternetDetail, TrafficValue } from '../../../models/dashboard.model';
import { cardsLabels } from '../../../models/cards.model';
import { InternetState } from '../../../models/internet.model';
import { getDynamicDetailData } from '../../../services/dynamic-detail.service';
import { navActionLinks } from '../../../constants/nav.constants';

export const DefaultDetailRenderer = ({ label, value }: InternetDetail) => {
    const [i18nLabel, i18nValue] = useGetTranslatedLabels([label, value as cardsLabels]);
    return (
        <section className="detail-pair">
            <section className="detail-pair-label">{i18nLabel}</section>
            <section className="detail-pair-value">{i18nValue || value}</section>
        </section>
    );
};

const DetailsRendererWithTranslatedValues = ({ detail, trafficValue }: any) => {
    const i18nUnit = useGetTranslatedLabel(trafficValue.unit);
    return <DefaultDetailRenderer {...detail} value={`${trafficValue.value} ${i18nUnit}`} />;
};

export const getTrafficValue = (type: internetDetailsType, state: InternetState): TrafficValue => {
    const trafficValues: any = {
        [internetDetailsType.upload]: state.upload,
        [internetDetailsType.download]: state.download,
        [internetDetailsType.sent]: state.sent,
        [internetDetailsType.received]: state.received,
    };

    return trafficValues[type];
};

export const TrafficDetailRenderer = (detail: InternetDetail) => {
    // https:github.com/facebookexperimental/Recoil/issues/12
    const state = useRecoilValue(internetState);
    const trafficValue = getTrafficValue(detail.type, state);

    return <DetailsRendererWithTranslatedValues detail={detail} trafficValue={trafficValue} />;
};

export const ConfigurableDetailRenderer = (detail: InternetDetail) => {
    const { valueLabel, buttonLabel, buttonHandler, isConfigurationType } = getDynamicDetailData(
        detail.type
    );

    const [i18nLabel, i18nValue, i18ButtonLabel] = useGetTranslatedLabels([
        detail.label,
        valueLabel,
        buttonLabel,
    ]);

    return (
        <section className="detail-pair">
            <section className="detail-pair-label">{i18nLabel}</section>
            <section className="detail-pair-value">
                <span className="detail-pair-value-message">{i18nValue || detail.value} </span>
                {isConfigurationType ? (
                    <Link className="detail-pair-value-link" to={navActionLinks['internetSafety']}>
                        {i18ButtonLabel}
                    </Link>
                ) : (
                    <Button
                        buttonName={i18ButtonLabel}
                        className="detail-pair-value-button"
                        buttonHandler={buttonHandler}
                    />
                )}
            </section>
        </section>
    );
};
