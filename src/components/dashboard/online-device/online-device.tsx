import React from 'react';
import { Link } from 'react-router-dom';

import { useGetTranslatedLabel } from '../../../services/i18n.service';
import { connectionTypes } from '../../../constants/cards.constants';

import { OnlineDeviceProps } from '../../../models/dashboard.model';
import { cardsLabels } from '../../../models/cards.model';

const getConnectionModifier = (isHome: boolean) =>
    isHome ? 'connections-count__home' : 'connections-count__guest';

export const OnlineDeviceComponent = React.memo(
    ({ onlineDevice: { countOfConnections, type, isHome } }: OnlineDeviceProps) => {
        const label =
            type === connectionTypes.wifi
                ? cardsLabels.wifiConnectionTypeMessageLabel
                : cardsLabels.wiredConnectionTypeMessageLabel;
        const deviseTypeLabel = useGetTranslatedLabel(label);

        return (
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
                <p className="device-type">{deviseTypeLabel}</p>
            </section>
        );
    }
);
