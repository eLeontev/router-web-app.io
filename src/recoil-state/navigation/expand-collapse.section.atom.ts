import { atom } from 'recoil';

import { expandSectionStateKey } from '../../constants/recoil.constants';
import { navSectionTypes } from '../../models/nav.model';

export const expandSectionState = atom<navSectionTypes>({
    key: expandSectionStateKey,
    default: navSectionTypes.none,
});
