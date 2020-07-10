import { dynamicModalLabels, modalLabels } from './modals.model';
import { actionsLabels } from './actions.model';
import { cardsLabels } from './cards.model';
import { loginLabels } from './login.model';
import { navLabels } from './nav.model';
import { commonLabels } from './common.model';
import { devicesListLabels } from './devices-list.model';

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

export type I18nLoginLabels = {
    [label in loginLabels]: {
        [key in languages]: string;
    };
};

export type I18nNavLabels = {
    [label in navLabels]: {
        [key in languages]: string;
    };
};

export type I18nCommonLabels = {
    [label in commonLabels]: {
        [key in languages]: string;
    };
};

export type I18nDevicesListLabels = {
    [label in devicesListLabels]: {
        [key in languages]: string;
    };
};

export type Labels =
    | cardsLabels
    | modalLabels
    | dynamicModalLabels
    | actionsLabels
    | loginLabels
    | navLabels
    | commonLabels
    | devicesListLabels;

export type I18nLabels = {
    [label in Labels]: {
        [key in languages]: string;
    };
};
