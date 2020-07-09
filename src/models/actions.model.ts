import { connectionActionTypes } from '../constants/modal.constants';
import { ConnectionInfoPropsWithSetters } from './modals.model';

export enum actionsLabels {
    addLogoType = 'addLogoType',
    copyType = 'copyType',
    printType = 'printType',
    wpsType = 'wpsType',
    activatedWpsType = 'activatedWpsType',
}

export type ActionNames = {
    activatedWpsType: actionsLabels;
    [connectionActionTypes.addLogoType]: actionsLabels;
    [connectionActionTypes.copyType]: actionsLabels;
    [connectionActionTypes.printType]: actionsLabels;
    [connectionActionTypes.wpsType]: actionsLabels;
};

export type ModalActionHandler = (actionPayload: ConnectionInfoPropsWithSetters) => Promise<void>;

export type ModalActionHandlers = {
    [actionType in connectionActionTypes]: ModalActionHandler;
};
