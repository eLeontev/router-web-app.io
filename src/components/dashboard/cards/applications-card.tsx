import React from 'react';
import { ApplicationsCardContent, CardContent } from '../../../models/dashboard.model';
import { useGetTranslatedLabel } from '../../../services/i18n.service';
import { cardsLabels } from '../../../models/cards.model';

export const ApplicationsCardComponent = (cardContent: CardContent) => {
    const { applications } = cardContent as ApplicationsCardContent;
    const hasNoApplicationsMessage = useGetTranslatedLabel(
        cardsLabels.hasNoApplicationsMessageLabel
    );
    return (
        <section className="card-content">
            {applications.length ? 'Applications' : hasNoApplicationsMessage}
        </section>
    );
};
