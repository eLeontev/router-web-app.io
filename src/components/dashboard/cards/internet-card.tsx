import React from 'react';

import { ProviderRenderer } from '../internet/provider';
import { TrafficRenderer } from '../internet/traffic';
import { DetailsRenderer } from '../internet/details';

import { CardContent, InternetCardContent } from '../../../models/dashboard.model';

export const InternetCardComponent = (cardContent: CardContent) => {
    const {
        main: { traffic, startedTime, provider },
        details,
    } = cardContent as InternetCardContent;

    return (
        <section className="card-content">
            <ProviderRenderer {...provider} connectionDuration={startedTime} />
            <section className="traffics">
                <TrafficRenderer {...traffic.download} />
                <TrafficRenderer {...traffic.upload} />
            </section>
            <DetailsRenderer details={details} />
        </section>
    );
};
