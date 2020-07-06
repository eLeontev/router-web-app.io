import { selector } from 'recoil';

import { internetState } from './internet.atom';
import { sentReceivedTrafficStateKey } from '../../constants/recoil.constants';

export const sentReceivedTrafficState = selector({
    key: sentReceivedTrafficStateKey,
    get: ({ get }) => ({
        sent: get(internetState).sent,
        received: get(internetState).received,
    }),
});
