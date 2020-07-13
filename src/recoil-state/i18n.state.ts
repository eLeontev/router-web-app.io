import { sAtom } from '../utils/simple-recoil.util';

import { localStorageI18nKey } from '../constants/i18n/i18n.constants';

import { languages } from '../models/i18n.model';

const lang = (localStorage.getItem(localStorageI18nKey) as languages) || languages.english;
export const i18nState = sAtom<languages>(lang);
