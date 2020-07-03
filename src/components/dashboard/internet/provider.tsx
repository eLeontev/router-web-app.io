import React from 'react';
import './provider.scss';

import { providerHeaderLabel } from '../../../constants/cards.constants';
import { InternetProvider } from '../../../models/dashboard.model';

export type ProviderProps = InternetProvider & {
    connectionDuration: string;
};

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
        <section className="provider-connection-duration">Connected: {connectionDuration}</section>
    </section>
);
