import { sAtom } from '../utils/simple-recoil.util';
import { languages } from '../models/i18n.model';

export const i18nState = sAtom<languages>(languages.russian);
