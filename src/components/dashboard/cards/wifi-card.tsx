import React from 'react';

import { OnlineDeviceComponent } from '../online-device/online-device';
import { ConnectionComponent } from '../connection/connection';

import { useGetTranslatedLabel } from '../../../services/i18n.service';

import { cardsLabels } from '../../../models/cards.model';
import {
    CardContent,
    Connection,
    OnlineDevice,
    WiFiCardContent,
} from '../../../models/dashboard.model';

export const WifiCardComponent = (cardContent: CardContent) => {
    const { connections, onlineDevices } = cardContent as WiFiCardContent;
    const onlineDeviceTitle = useGetTranslatedLabel(cardsLabels.onlineDeviceTitleLabel);

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
