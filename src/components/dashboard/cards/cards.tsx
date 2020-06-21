import React from 'react';
import './cards.scss';

import * as models from '../../../models/cards.models';
import { cardTypes } from '../../../constants/cards.constants';
import { UnknownCard } from './unknown-card';
import { ApplicationsCardComponent } from './applications-card';
import { SystemCardComponent } from './system-card';
import { WifiCardComponent } from './wifi-card';

const cardsComponents: models.CardsComponents = {
    [cardTypes.applicationType]: ApplicationsCardComponent,
    [cardTypes.systemType]: SystemCardComponent,
    [cardTypes.wifiType]: WifiCardComponent,
};

export const Card = React.memo(({ card }: models.CardProps) => {
    const CardComponent = cardsComponents[card.type];
    return (
        <section className="card">
            {CardComponent ? (
                <CardComponent card={card} />
            ) : (
                <UnknownCard card={card} />
            )}
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
