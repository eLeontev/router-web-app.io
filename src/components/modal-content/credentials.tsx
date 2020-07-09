import React from 'react';

import { useGetTranslatedLabels } from '../../services/i18n.service';

import { modalLabels } from '../../models/modals.model';

export type CredentialsProps = {
    password: string | null;
    networkId: string;
};

export const Credentials = ({ password, networkId }: CredentialsProps) => {
    const [networkNameLabel, passwordLabel] = useGetTranslatedLabels([
        modalLabels.networkNameLabel,
        modalLabels.passwordLabel,
    ]);
    return (
        <section className="modal-connection-credentials">
            <section className="modal-connection-credentials-pair">
                <span className="modal-connection-credentials-pair_label">{networkNameLabel}:</span>
                <b className="modal-connection-credentials-pair_value">{` ${networkId}`}</b>
            </section>
            <section className="modal-connection-credentials_pair">
                <span className="modal-connection-credentials-pair_label">{passwordLabel}:</span>
                <b className="modal-connection-credentials-pair_value">{` ${password}`}</b>
            </section>
        </section>
    );
};
