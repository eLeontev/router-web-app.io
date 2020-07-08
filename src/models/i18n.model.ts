import { cardsLabels } from '../constants/cards.constants';

export enum languages {
    english = 'english',
    russian = 'russian',
}

export type I18nCardsLabels = {
    [label in cardsLabels]: {
        [key in languages]: string;
    };
};

export type Labels = cardsLabels;
export type I18nLabels = I18nCardsLabels;
