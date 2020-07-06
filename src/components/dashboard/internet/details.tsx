import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import './details.scss';

import { Button } from '../../common/button';

import { sentReceivedTrafficState } from '../../../recoil-state/internet/sent-received.traffic.selector';
import { speedTrafficState } from '../../../recoil-state/internet/speed.traffic.selector';

import {
    hiddenDetailsLabel,
    internetDetailsType,
    moreDetailsLabel,
} from '../../../constants/cards.constants';

import { InternetDetail, InternetDetails } from '../../../models/dashboard.model';

const { download, upload, received, sent, reboot, configuration } = internetDetailsType;

export type InternetDetailsProps = {
    details: InternetDetails;
};

export const DefaultDetailRenderer = ({ label, value }: InternetDetail) => (
    <section className="detail-pair">
        <section className="detail-pair-label">{label}</section>
        <section className="detail-pair-value">{value}</section>
    </section>
);

export const DynamicSentReceivedDetailRenderer = (detail: InternetDetail) => {
    const { received, sent } = useRecoilValue(sentReceivedTrafficState);
    const value = detail.type === internetDetailsType.sent ? sent : received;

    return <DefaultDetailRenderer {...detail} value={value} />;
};

export const DynamicTrafficDetailRenderer = (detail: InternetDetail) => {
    const { upload, download } = useRecoilValue(speedTrafficState);
    let { value, unit } = detail.type === internetDetailsType.upload ? upload : download;

    return <DefaultDetailRenderer {...detail} value={`${value} ${unit}`} />;
};

export const detailRenderers: {
    [renderer in internetDetailsType]: (detail: InternetDetail) => JSX.Element;
} = {
    [configuration]: DefaultDetailRenderer,
    [reboot]: DefaultDetailRenderer,
    [sent]: DynamicSentReceivedDetailRenderer,
    [received]: DynamicSentReceivedDetailRenderer,
    [download]: DynamicTrafficDetailRenderer,
    [upload]: DynamicTrafficDetailRenderer,
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
