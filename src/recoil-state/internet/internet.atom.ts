import { atom } from 'recoil';

import { internetStateKey } from '../../constants/recoil.constants';
import { InternetState } from '../../models/internet.model';
import { cardsLabels } from '../../constants/cards.constants';

export const internetState = atom<InternetState>({
    key: internetStateKey,
    default: {
        download: {
            value: 0,
            unit: cardsLabels.kbitsLabel,
        },
        upload: {
            value: 0,
            unit: cardsLabels.kbitsLabel,
        },
        received: {
            value: 0,
            unit: cardsLabels.mbitLabel,
        },
        sent: {
            value: 0,
            unit: cardsLabels.mbitLabel,
        },
    },
});
