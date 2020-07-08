import React from 'react';

import { Button } from '../../common/button';
import { Checkbox } from '../../common/checkbox';

import { useGetTranslatedLabels } from '../../../services/i18n.service';
import { useButtonToOpenModal, useTriggerCheckbox } from './connection.hooks';
import { cardsLabels } from '../../../constants/cards.constants';

import { ConnectionProps } from '../../../models/dashboard.model';

export const ConnectionComponent = ({
    connection: { channel, connectionInfo, isActive, name, range, connectionId },
}: ConnectionProps) => {
    const { triggerCheckbox, isWaiting, connectionStatus } = useTriggerCheckbox(
        connectionId,
        isActive
    );

    const setModalContext = useButtonToOpenModal(connectionInfo, name, range, connectionStatus);

    const [channelLabel, showConnectionInfoButtonLabel] = useGetTranslatedLabels([
        cardsLabels.channelLabel,
        cardsLabels.showConnectionInfoButtonLabel,
    ]);

    return (
        <section className="connection">
            <section className="connection-main">
                <section className="connection-main__status">
                    <Checkbox
                        isDisable={isWaiting}
                        isActive={connectionStatus}
                        triggerCheckbox={() => triggerCheckbox(!connectionStatus)}
                    />
                </section>
                <section className="details">
                    <p className="details__name">{name}</p>
                    <section className="details--minor">
                        <p className="details--minor__range">{range}, </p>
                        <p className="details--minor__channel">
                            {channelLabel} {channel}
                        </p>
                    </section>
                </section>
            </section>
            <section className="connection-info">
                <Button
                    className="show-more-button"
                    buttonName={showConnectionInfoButtonLabel}
                    buttonHandler={setModalContext}
                />
            </section>
        </section>
    );
};
