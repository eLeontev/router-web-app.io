import React from 'react';
import {
    CardProps,
    WiFiCard,
    Connection,
    OnlineDevice,
    ConnectionProps,
    OnlineDeviceProps,
} from '../../../models/cards.models';
import {
    connectionTypeMessages,
    channgelLabel,
    showConnectionInfoButtonLabel,
    onlineDeviceTitle,
} from '../../../constants/cards.constants';
import { Button } from '../../common/button';

export const ConnectionComponent = ({
    connection: { channel, connectionInfo, isEnabled, name, range },
}: ConnectionProps) => (
    <section className="connection">
        <section className="connection-main">
            <section className="connection-main__status">
                {isEnabled ? 'enabled' : 'disabled'}
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

const getConnectionModificator = (isHome: boolean) =>
    isHome ? 'connections-count__home' : 'connections-count__guest';

export const OnlineDeviceComponent = ({
    onlineDevice: { countOfConnections, type, isHome },
}: OnlineDeviceProps) => (
    <section className="online-device">
        <p className={`connections-count ${getConnectionModificator(isHome)}`}>
            {countOfConnections}
            {countOfConnections ? (
                <span className="connections-count__hint">
                    {countOfConnections}
                </span>
            ) : null}
        </p>
        <p className="device-type">{connectionTypeMessages[type]}</p>
    </section>
);

export const WifiCardComponent = (props: CardProps) => {
    const {
        title,
        cardContent: { connections, onlineDevices },
    } = props.card as WiFiCard;
    return (
        <section className="application-card">
            <h3 className="card__title">{title}</h3>
            <section className="card-content">
                <section className="connections">
                    {connections.map((connection: Connection) => (
                        <ConnectionComponent
                            key={connection.key}
                            connection={connection}
                        />
                    ))}
                </section>
                {onlineDevices.length ? (
                    <section className="devices">
                        <h3 className="devices--title">{onlineDeviceTitle}</h3>
                        <section className="devices-content">
                            {onlineDevices.map((onlineDevice: OnlineDevice) => (
                                <OnlineDeviceComponent
                                    key={onlineDevice.key}
                                    onlineDevice={onlineDevice}
                                />
                            ))}
                        </section>
                    </section>
                ) : null}
            </section>
        </section>
    );
};
