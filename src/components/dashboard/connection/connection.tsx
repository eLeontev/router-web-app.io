import React, { useState, useCallback, useContext } from 'react';
import { Button } from '../../common/button';
import { Checkbox } from '../../common/checkbox';
import { ConnectionProps } from '../../../models/dashboard.model';
import {
    channgelLabel,
    showConnectionInfoButtonLabel,
} from '../../../constants/cards.constants';
import { LoaderContext } from '../../../context/loader.context';
import { ModalContext } from '../../../context/modal.context';

export const ConnectionComponent = ({
    connection: {
        channel,
        connectionInfo,
        isActive,
        name,
        range,
        connectionId,
    },
}: ConnectionProps) => {
    const [connectionStatus, setConnectionStatus] = useState(isActive);
    const [isWaiting, setStatus] = useState(false);
    const { setLoader } = useContext(LoaderContext);

    const { setModal } = useContext(ModalContext);

    const triggerCheckbox = useCallback(
        async (isActive: boolean) => {
            setConnectionStatus(isActive);

            setStatus(true);
            setLoader(true);
            try {
                await new Promise((res) =>
                    setTimeout(() => res(connectionId), 2000)
                );
                setConnectionStatus(isActive);
            } catch {
                setConnectionStatus(!isActive);
            } finally {
                setStatus(false);
                setLoader(false);
            }
        },
        [connectionId, setLoader, setStatus]
    );

    return (
        <section className="connection">
            <section className="connection-main">
                <section className="connection-main__status">
                    <Checkbox
                        isDisable={isWaiting}
                        isActive={connectionStatus}
                        triggerCheckbox={triggerCheckbox}
                    />
                </section>
                <section className="details">
                    <p className="details__name">{name}</p>
                    <section className="details--minor">
                        <p className="details--minor__range">{range}, </p>
                        <p className="details--minor__channel">
                            {channgelLabel} {channel}
                        </p>
                    </section>
                </section>
            </section>
            <section className="connection-info">
                <Button
                    className="show-more-button"
                    buttonName={showConnectionInfoButtonLabel}
                    buttonHandler={() =>
                        setModal({ ...connectionInfo, name, range })
                    }
                />
            </section>
        </section>
    );
};
