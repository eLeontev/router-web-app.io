import { connectionActionTypes } from '../constants/modal.constants';
import { ConnectionInfoProps } from '../models/modals.model';
import { ModalActionHandlers } from '../models/actions.model';

export const copyPasteActionHandler = async ({
    credentials: { password },
}: ConnectionInfoProps) => {
    if (password && navigator.clipboard) {
        return await navigator.clipboard.writeText(password);
    }
};

export const modalActionHandlers: ModalActionHandlers = {
    [connectionActionTypes.copyType]: copyPasteActionHandler,
    [connectionActionTypes.addLogoType]: copyPasteActionHandler,
    [connectionActionTypes.printType]: copyPasteActionHandler,
    [connectionActionTypes.wpsType]: copyPasteActionHandler,
};
