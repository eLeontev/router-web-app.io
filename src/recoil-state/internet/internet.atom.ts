import { atom } from 'recoil';

import { internetStateKey } from '../../constants/recoil.constants';
import { InternetState } from '../../models/internet.model';

export const internetState = atom<InternetState>({
    key: internetStateKey,
    default: {
        download: {
            value: 0,
            unit: '',
        },
        upload: {
            value: 0,
            unit: '',
        },
        received: '',
        sent: '',
    },
});
