import React, { useState, useCallback } from 'react';
import { Button } from '../../common/button';
import { Checkbox } from '../../common/checkbox';
import { ConnectionProps } from '../../../models/cards.models';
import {
    channgelLabel,
    showConnectionInfoButtonLabel,
} from '../../../constants/cards.constants';

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
    const triggerCheckbox = useCallback(
        async (isActive: boolean) => {
            setConnectionStatus(isActive);

            try {
                await Promise.resolve(connectionId);
                setConnectionStatus(isActive);
            } catch {
                setConnectionStatus(!isActive);
            }
        },
        [connectionId]
    );

    return (
        <section className="connection">
            <section className="connection-main">
                <section className="connection-main__status">
                    <Checkbox
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
                    buttonHandler={console.log}
                />
            </section>
        </section>
    );
};
