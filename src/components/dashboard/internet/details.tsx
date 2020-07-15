import React from 'react';
import './details.scss';

import { Button } from '../../common/button';
import { ConfigurableDetailRenderer, DefaultDetailRenderer, TrafficDetailRenderer } from './detail';

import { useToggleButtonWithI18n } from '../../../hooks/toggle-button-with-i18n';
import { internetDetailsType } from '../../../constants/cards.constants';

import { InternetDetail, InternetDetails } from '../../../models/dashboard.model';
import { cardsLabels } from '../../../models/cards.model';

const { download, upload, received, sent, reboot, configuration } = internetDetailsType;

export type InternetDetailsProps = {
    details: InternetDetails;
};

export const detailRenderers: {
    [renderer in internetDetailsType]: (detail: InternetDetail) => JSX.Element;
} = {
    [configuration]: ConfigurableDetailRenderer,
    [reboot]: ConfigurableDetailRenderer,
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
    const { isHidden, i18nLabels, toggleDetailsVisibility } = useToggleButtonWithI18n([
        cardsLabels.moreDetailsLabel,
        cardsLabels.hiddenDetailsLabel,
    ]);
    const [moreDetailsLabel, hiddenDetailsLabel] = i18nLabels;

    return (
        <section className="details">
            <Button
                className="details-button"
                buttonHandler={toggleDetailsVisibility}
                buttonName={isHidden ? moreDetailsLabel : hiddenDetailsLabel}
            />
            {isHidden ? null : <section className="details-info">{renderDetails(details)}</section>}
        </section>
    );
};
