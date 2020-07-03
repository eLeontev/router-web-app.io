import React from 'react';
import { CardContent, ApplicationsCardContent } from '../../../models/dashboard.model';

export const hasNoApplicationsMessage = 'Applications not installed';

export const ApplicationsCardComponent = (cardContent: CardContent) => {
    const { applications } = cardContent as ApplicationsCardContent;

    return (
        <section className="card-content">
            {applications.length ? 'Applications' : hasNoApplicationsMessage}
        </section>
    );
};
