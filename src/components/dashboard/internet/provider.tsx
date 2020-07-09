import React from 'react';
import { useRecoilValue } from 'recoil';
import './provider.scss';

import { internetState } from '../../../recoil-state/internet.state';

import { ParamHandlerArguments, updateUptime } from '../../../services/system-params.service';
import { useGetTranslatedLabels } from '../../../services/i18n.service';

import { cardsLabels } from '../../../constants/cards.constants';

import { InternetProvider } from '../../../models/dashboard.model';

export type ProviderProps = InternetProvider & {
    connectionDuration: string;
};

export const InternetConnectionDuration = React.memo(
    ({ startedTime, value }: ParamHandlerArguments) => {
        useRecoilValue(internetState); // to sync with state update
        const [connectedLabel, daysLabel] = useGetTranslatedLabels([
            cardsLabels.connectedLabel,
            cardsLabels.daysLabel,
        ]);
        return (
            <section className="provider-connection-duration">
                {`${connectedLabel}: ${updateUptime({ startedTime, value, daysLabel })}`}
            </section>
        );
    }
);
export const ProviderRenderer = ({
    providerLabel,
    providerType,
    connectionDuration,
}: ProviderProps) => {
    const [providerHeaderLabel, i18nProviderLabel] = useGetTranslatedLabels([
        cardsLabels.providerHeaderLabel,
        providerLabel,
    ]);

    return (
        <section className="provider">
            <h3 className="provider-label">{providerHeaderLabel}</h3>
            <section className="provider-info">
                <span className="provider-info_label">{i18nProviderLabel}</span>
                {' / '}
                <span className="provider-info_type">{providerType}</span>
            </section>
            <InternetConnectionDuration value="" startedTime={connectionDuration} />
        </section>
    );
};
