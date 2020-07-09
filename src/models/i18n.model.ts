import { dynamicModalLabels, modalLabels } from './modals.model';
import { actionsLabels } from './actions.model';
import { cardsLabels } from './cards.model';

export enum languages {
    english = 'english',
    russian = 'russian',
}

export type I18nCardsLabels = {
    [label in cardsLabels]: {
        [key in languages]: string;
    };
};

export type I18nModalLabels = {
    [label in modalLabels]: {
        [key in languages]: string;
    };
};

export type I18nDynamicModalLabels = {
    [label in dynamicModalLabels]: {
        [key in languages]: string;
    };
};

export type I18nActionsLabels = {
    [label in actionsLabels]: {
        [key in languages]: string;
    };
};
export type Labels = cardsLabels | modalLabels | dynamicModalLabels | actionsLabels;

export type I18nLabels = {
    [label in Labels]: {
        [key in languages]: string;
    };
};
