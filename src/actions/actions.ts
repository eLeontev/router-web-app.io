import { connectionActionTypes } from '../constants/modal.constants';
import { ModalActionHandlers } from '../models/actions.model';
import { copyPasteActionHandler } from './copy-paste.action';
import { addLogoActionHandler } from './add-logo.action';
import { printActionHandler } from './print.action';
import { wpsActionHanlder } from './wps.action';

export const modalActionHandlers: ModalActionHandlers = {
    [connectionActionTypes.copyType]: copyPasteActionHandler,
    [connectionActionTypes.addLogoType]: addLogoActionHandler,
    [connectionActionTypes.printType]: printActionHandler,
    [connectionActionTypes.wpsType]: wpsActionHanlder,
};
