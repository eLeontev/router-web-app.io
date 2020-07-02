import { connectionActionTypes } from '../constants/modal.constants';
import { ConnectionInfoPropsWithSetters } from './modals.model';

export type ActionNames = {
    activatedWpsType: string;
    [connectionActionTypes.addLogoType]: string;
    [connectionActionTypes.copyType]: string;
    [connectionActionTypes.printType]: string;
    [connectionActionTypes.wpsType]: string;
};

export type ModalActionHandler = (actionPayload: ConnectionInfoPropsWithSetters) => Promise<void>;

export type ModalActionHandlers = {
    [actionType in connectionActionTypes]: ModalActionHandler;
};
