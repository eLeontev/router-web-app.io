import React from 'react';
import { useRecoilValue } from 'recoil';
import './provider.scss';

import { internetState } from '../../../recoil-state/internet/internet.atom';

import { providerHeaderLabel } from '../../../constants/cards.constants';

import { InternetProvider } from '../../../models/dashboard.model';
import { ParamHandlerArguments, updateUptime } from '../../../services/system-params.service';

export type ProviderProps = InternetProvider & {
    connectionDuration: string;
};

export const InternetConnectionDuration = React.memo(
    ({ startedTime, value }: ParamHandlerArguments) => {
        useRecoilValue(internetState); // to sync with state update

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
