import { selector } from 'recoil';

import { internetState } from './internet.atom';
import { speedTrafficStateKey } from '../../constants/recoil.constants';

export const speedTrafficState = selector({
    key: speedTrafficStateKey,
    get: ({ get }) => ({
        upload: get(internetState).upload,
        download: get(internetState).download,
    }),
});
