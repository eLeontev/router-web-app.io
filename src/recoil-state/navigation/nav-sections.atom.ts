import { atom } from 'recoil';

import { navSectionsStateKey } from '../../constants/recoil.constants';
import { navigationMockData } from '../../mock/nav.mock';

import { NavSections } from '../../models/nav.model';

export const navSectionsState = atom<NavSections>({
    key: navSectionsStateKey,
    default: navigationMockData.sections,
});
