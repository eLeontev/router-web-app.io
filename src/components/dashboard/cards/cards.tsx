import React from 'react';
import './cards.scss';

import * as models from '../../../models/dashboard.model';
import { cardTypes } from '../../../constants/cards.constants';
import { UnknownCard } from './unknown-card';
import { ApplicationsCardComponent } from './applications-card';
import { SystemCardComponent } from './system-card';
import { WifiCardComponent } from './wifi-card';
import { NetworkPortsCardComponent } from './network-ports-card';

const cardsComponents: models.CardsComponents = {
    [cardTypes.applicationType]: ApplicationsCardComponent,
    [cardTypes.systemType]: SystemCardComponent,
    [cardTypes.wifiType]: WifiCardComponent,
    [cardTypes.portType]: NetworkPortsCardComponent,
};

export const Card = React.memo(({ card }: models.CardProps) => {
    const CardComponent = cardsComponents[card.type];
    const title = card.title;
    return (
        <section className="card">
            <section className="application-card">
                <h3 className="card__title">{title}</h3>
                {CardComponent ? (
                    <CardComponent {...card.cardContent} />
                ) : (
                    <UnknownCard type={card.type} />
                )}
            </section>
        </section>
    );
});

export const Cards = ({ leftCards, rightCards }: models.CardsProps) => (
    <section className="cards">
        <section className="cards-left">
            {leftCards.map((card: models.Card) => (
                <Card key={card.cardId} card={card} />
            ))}
        </section>

        <section className="cards-right">
            {rightCards.map((card: models.Card) => (
                <Card key={card.cardId} card={card} />
            ))}
        </section>
    </section>
);
