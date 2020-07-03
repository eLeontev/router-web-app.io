import React from 'react';

import { ProviderRenderer } from '../internet/provider';
import { TrafficRenderer } from '../internet/traffic';
import { DetailsRenderer } from '../internet/details';

import { CardContent, InternetCardContent } from '../../../models/dashboard.model';
import { WithInternetContext } from '../../../context/internet.context';
import { ContextUpdater } from '../internet/context-updater';

export const InternetCardRenderer = (cardContent: InternetCardContent) => {
    const { main, details } = cardContent;
    const { trafficInfo, startedTime, provider } = main;
    const { upload, download } = trafficInfo;

    return (
        <section className="card-content">
            <ProviderRenderer {...provider} connectionDuration={startedTime} />
            <section className="traffics">
                <TrafficRenderer {...download} />
                <TrafficRenderer {...upload} />
            </section>
            <DetailsRenderer details={details} />
        </section>
    );
};
export const InternetCardComponent = (cardContent: CardContent) => {
    return (
        <WithInternetContext>
            <ContextUpdater
                details={(cardContent as InternetCardContent).details}
                trafficInfo={(cardContent as InternetCardContent).main.trafficInfo}
            />
            <InternetCardRenderer {...(cardContent as InternetCardContent)} />
        </WithInternetContext>
    );
};
