import { atom } from 'recoil';

import { toggleNavBarStateKey } from '../../constants/recoil.constants';

export const toggleNavBarState = atom({
    key: toggleNavBarStateKey,
    default: false,
});
