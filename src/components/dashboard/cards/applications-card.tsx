import React from 'react';
import { CardProps, ApplicationsCard } from '../../../models/cards.models';

export const hasNoApplicationsMessage = 'Applications not installed';

export const ApplicationsCardComponent = (props: CardProps) => {
    const {
        title,
        cardContent: { applications },
    } = props.card as ApplicationsCard;

    return (
        <section className="application-card">
            <h3 className="card__title">{title}</h3>
            <section className="card-content">
                {applications.length
                    ? 'Applications'
                    : hasNoApplicationsMessage}
            </section>
        </section>
    );
};
