import { connectionActionTypes } from '../constants/modal.constants';
import { ConnectionInfoProps } from './modals.model';

export type ActionNames = {
    [actionType in connectionActionTypes]: string;
};

export type ModalActionHandler = (
    actionPayload: ConnectionInfoProps
) => Promise<void>;

export type ModalActionHandlers = {
    [actionType in connectionActionTypes]: ModalActionHandler;
};
