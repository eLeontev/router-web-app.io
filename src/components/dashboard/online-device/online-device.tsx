import React from 'react';
import { OnlineDeviceProps } from '../../../models/dashboard.model';
import { connectionTypeMessages } from '../../../constants/cards.constants';

const getConnectionModificator = (isHome: boolean) =>
    isHome ? 'connections-count__home' : 'connections-count__guest';

export const OnlineDeviceComponent = ({
    onlineDevice: { countOfConnections, type, isHome },
}: OnlineDeviceProps) => (
    <section className="online-device">
        <p className={`connections-count ${getConnectionModificator(isHome)}`}>
            {countOfConnections}
            {countOfConnections ? (
                <span className="connections-count__hint">{countOfConnections}</span>
            ) : null}
        </p>
        <p className="device-type">{connectionTypeMessages[type]}</p>
    </section>
);
