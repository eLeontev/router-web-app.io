import React, { useContext } from 'react';
import './provider.scss';

import { providerHeaderLabel } from '../../../constants/cards.constants';
import { InternetProvider } from '../../../models/dashboard.model';
import { ParamHandlerArguments, updateUptime } from '../../../mock/system-params.mock';
import { InternetContext } from '../../../context/internet.context';

export type ProviderProps = InternetProvider & {
    connectionDuration: string;
};

export const InternetConnectionDuration = React.memo(
    ({ startedTime, value }: ParamHandlerArguments) => {
        useContext(InternetContext);

        return (
            <section className="provider-connection-duration">
                Connected: {updateUptime({ startedTime, value })}
            </section>
        );
    }
);
export const ProviderRenderer = ({
    providerLabel,
    providerType,
    connectionDuration,
}: ProviderProps) => (
    <section className="provider">
        <h3 className="provider-label">{providerHeaderLabel}</h3>
        <section className="provider-info">
            <span className="provider-info_label">{providerLabel}</span>
            {' / '}
            <span className="provider-info_type">{providerType}</span>
        </section>
        <InternetConnectionDuration value="" startedTime={connectionDuration} />
    </section>
);
