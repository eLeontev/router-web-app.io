import { sAtom, sSelector } from '../utils/simple-recoil.util';
import { cardsLabels } from '../constants/cards.constants';

import { InternetState, SpeedTrafficState } from '../models/internet.model';

export const internetState = sAtom<InternetState>({
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
});

export const speedTrafficState = sSelector<SpeedTrafficState>(({ get }) => ({
    upload: get<InternetState>(internetState).upload,
    download: get<InternetState>(internetState).download,
}));
