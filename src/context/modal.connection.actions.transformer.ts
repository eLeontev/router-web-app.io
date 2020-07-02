import { ConnectionAction, ConnectionInfo } from '../models/dashboard.model';
import { ModalInfo } from '../models/modals.model';
import { connectionActionTypes } from '../constants/modal.constants';

const alwaysActiveConnectionActionTypes = [
    connectionActionTypes.addLogoType,
    connectionActionTypes.printType,
];

export const setIsActiveActionStatus = (
    { actionType, isActive }: ConnectionAction,
    connectionStatus: boolean
): ConnectionAction => ({
    actionType,
    isActive: connectionStatus ? isActive : false,
});

export const getConnectionModalInfo = (
    connectionInfo: ConnectionInfo,
    name: string,
    range: string,
    connectionStatus: boolean
): ModalInfo => ({
    ...connectionInfo,
    name,
    range,
    actions: {
        WPS: setIsActiveActionStatus(connectionInfo.actions.WPS, connectionStatus),
        main: connectionInfo.actions.main.map((action) =>
            alwaysActiveConnectionActionTypes.includes(action.actionType)
                ? action
                : setIsActiveActionStatus(action, connectionStatus)
        ),
    },
});
