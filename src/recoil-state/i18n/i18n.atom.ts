import { atom } from 'recoil';

import { i18nStateKey } from '../../constants/recoil.constants';
import { languages } from '../../models/i18n.model';

export const i18nState = atom<languages>({
    key: i18nStateKey,
    default: languages.english,
});
