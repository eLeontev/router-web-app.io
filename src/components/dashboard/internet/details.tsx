import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import './details.scss';

import { Button } from '../../common/button';

import { internetState } from '../../../recoil-state/internet.state';
import { useGetTranslatedLabel, useGetTranslatedLabels } from '../../../services/i18n.service';

import { internetDetailsType } from '../../../constants/cards.constants';

import { InternetDetail, InternetDetails, TrafficValue } from '../../../models/dashboard.model';
import { InternetState } from '../../../models/internet.model';
import { cardsLabels } from '../../../models/cards.model';

const { download, upload, received, sent, reboot, configuration } = internetDetailsType;

export type InternetDetailsProps = {
    details: InternetDetails;
};

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

export const detailRenderers: {
    [renderer in internetDetailsType]: (detail: InternetDetail) => JSX.Element;
} = {
    [configuration]: DefaultDetailRenderer,
    [reboot]: DefaultDetailRenderer,
    [sent]: TrafficDetailRenderer,
    [received]: TrafficDetailRenderer,
    [download]: TrafficDetailRenderer,
    [upload]: TrafficDetailRenderer,
    [internetDetailsType.default]: DefaultDetailRenderer,
};

export const renderDetail = (detail: InternetDetail, index: number) => {
    const DetailRenderer = detailRenderers[detail.type];
    return <DetailRenderer key={index} {...detail} />;
};

export const renderDetails = (details: InternetDetails) =>
    details.map((detail: InternetDetail, index: number) => renderDetail(detail, index));

export const DetailsRenderer = ({ details }: InternetDetailsProps) => {
    const [isHidden, toggleDetailsVisibility] = useState(true);
    const [moreDetailsLabel, hiddenDetailsLabel] = useGetTranslatedLabels([
        cardsLabels.moreDetailsLabel,
        cardsLabels.hiddenDetailsLabel,
    ]);

    return (
        <section className="details">
            <Button
                className="details-button"
                buttonHandler={() => toggleDetailsVisibility(!isHidden)}
                buttonName={isHidden ? moreDetailsLabel : hiddenDetailsLabel}
            />
            {isHidden ? null : <section className="details-info">{renderDetails(details)}</section>}
        </section>
    );
};
