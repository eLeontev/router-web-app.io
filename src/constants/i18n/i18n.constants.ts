import { i18nCardsLabels } from './i18n.cards.constants';
import { i18nModalLabels } from './i18n.modal.constants';
import { i18nActionsLabels } from './i18n.actions.constants';
import { i18nDynamicModalLabels } from './i18n.dynamic.constants';
import { i18nLoginLabels } from './i18n.login.constants';

import { I18nLabels } from '../../models/i18n.model';

export const i18nLabels: I18nLabels = {
    ...i18nCardsLabels,
    ...i18nModalLabels,
    ...i18nActionsLabels,
    ...i18nDynamicModalLabels,
    ...i18nLoginLabels,
};
