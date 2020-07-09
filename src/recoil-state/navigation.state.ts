import { sAtom } from '../utils/simple-recoil.util';

import { navigationMockData } from '../mock/nav.mock';

import { navSectionTypes } from '../models/nav.model';
import { NavSections } from '../models/nav.model';

export const expandSectionState = sAtom<navSectionTypes>(navSectionTypes.none);

export const navSectionsState = sAtom<NavSections>(navigationMockData.sections);

export const toggleNavBarState = sAtom(false);
