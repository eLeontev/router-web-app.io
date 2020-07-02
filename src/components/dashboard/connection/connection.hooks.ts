import { useCallback, useContext, useState } from 'react';

import { LoaderContext } from '../../../context/loader.context';
import { ModalContext } from '../../../context/modal.context';

import { getConnectionModalInfo } from '../../../context/modal.connection.actions.transformer';

import { ConnectionInfo } from '../../../models/dashboard.model';

export const useTriggerCheckbox = (connectionId: string, isActive: boolean) => {
    const { setLoader } = useContext(LoaderContext);
    const [connectionStatus, setConnectionStatus] = useState(isActive);
    const [isWaiting, setWaitingStatus] = useState(false);

    const triggerCheckbox = useCallback(
        async (connectionStatus: boolean) => {
            setConnectionStatus(connectionStatus);

            setWaitingStatus(true);
            setLoader(true);
            try {
                await new Promise((res) => setTimeout(() => res(connectionId), 2000));
                setConnectionStatus(connectionStatus);
            } catch {
                setConnectionStatus(!connectionStatus);
            } finally {
                setWaitingStatus(false);
                setLoader(false);
            }
        },
        [connectionId, setLoader, setWaitingStatus]
    );

    return {
        triggerCheckbox,
        connectionStatus,
        isWaiting,
    };
};

export const useButtonToOpenModal = (
    connectionInfo: ConnectionInfo,
    name: string,
    range: string,
    connectionStatus: boolean
) => {
    const { setModal } = useContext(ModalContext);

    return useCallback(
        () => setModal(getConnectionModalInfo(connectionInfo, name, range, connectionStatus)),
        [connectionStatus, connectionInfo, name, range, setModal]
    );
};
