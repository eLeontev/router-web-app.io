import React, { useState } from 'react';
import './details.scss';

import { InternetDetail, InternetDetails } from '../../../models/dashboard.model';
import {
    hiddenDetailsLabel,
    internetDetailsType,
    moreDetailsLabel,
} from '../../../constants/cards.constants';
import { Button } from '../../common/button';

export type InternetDetailsProps = {
    details: InternetDetails;
};

export const DefaultDetailRenderer = ({ label, value }: InternetDetail) => (
    <section className="detail-pair">
        <section className="detail-pair-label">{label}</section>
        <section className="detail-pair-value">{value}</section>
    </section>
);

export const detailRenderers: {
    [renderer in internetDetailsType]: (detail: InternetDetail) => JSX.Element;
} = {
    [internetDetailsType.default]: DefaultDetailRenderer,
    [internetDetailsType.dynamic]: DefaultDetailRenderer,
    [internetDetailsType.related]: DefaultDetailRenderer,
    [internetDetailsType.configuration]: DefaultDetailRenderer,
    [internetDetailsType.reboot]: DefaultDetailRenderer,
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
                buttonName={isHidden ? hiddenDetailsLabel : moreDetailsLabel}
            />
            {isHidden ? null : <section className="details-info">{renderDetails(details)}</section>}
        </section>
    );
};
