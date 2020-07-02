import React from 'react';
import { Link } from 'react-router-dom';

import { OnlineDeviceProps } from '../../../models/dashboard.model';
import { connectionTypeMessages } from '../../../constants/cards.constants';

const getConnectionModifier = (isHome: boolean) =>
    isHome ? 'connections-count__home' : 'connections-count__guest';

export const OnlineDeviceComponent = ({
    onlineDevice: { countOfConnections, type, isHome },
}: OnlineDeviceProps) => (
    <section className="online-device">
        <Link
            to={'/controlPanel/devicesList'}
            className={`connections-count ${getConnectionModifier(isHome)}`}
        >
            {countOfConnections}
            {countOfConnections ? (
                <span className="connections-count__hint">{countOfConnections}</span>
            ) : null}
        </Link>
        <p className="device-type">{connectionTypeMessages[type]}</p>
    </section>
);
