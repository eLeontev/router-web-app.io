import React from 'react';
import {
    CardProps,
    WiFiCard,
    Connection,
    OnlineDevice,
} from '../../../models/cards.models';
import { onlineDeviceTitle } from '../../../constants/cards.constants';
import { ConnectionComponent } from '../connection/connection';
import { OnlineDeviceComponent } from '../online-device/online-device';

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
                            key={connection.connectionId}
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
