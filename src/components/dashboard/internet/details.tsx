import React, { useContext, useState } from 'react';
import './details.scss';

import { Button } from '../../common/button';

import { InternetContext } from '../../../context/internet.context';
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
    const { internetState } = useContext(InternetContext);
    const value = detail.type === sent ? internetState.sent : internetState.received;

    return <DefaultDetailRenderer {...detail} value={value} />;
};

export const DynamicTrafficDetailRenderer = (detail: InternetDetail) => {
    const { internetState } = useContext(InternetContext);
    let { value, unit } = detail.type === upload ? internetState.upload : internetState.download;

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
