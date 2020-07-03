import React from 'react';
import {
    Connection,
    OnlineDevice,
    CardContent,
    WiFiCardContent,
} from '../../../models/dashboard.model';
import { onlineDeviceTitle } from '../../../constants/cards.constants';
import { ConnectionComponent } from '../connection/connection';
import { OnlineDeviceComponent } from '../online-device/online-device';

export const WifiCardComponent = (cardContent: CardContent) => {
    const { connections, onlineDevices } = cardContent as WiFiCardContent;
    return (
        <section className="card-content">
            <section className="connections">
                {connections.map((connection: Connection) => (
                    <ConnectionComponent key={connection.connectionId} connection={connection} />
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
    );
};
