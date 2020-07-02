import React from 'react';

import { networkNameLablel, passwordLablel } from '../../constants/modal.constants';

export type CredentialsProps = {
    password: string | null;
    networkId: string;
};

export const Credentials = ({ password, networkId }: CredentialsProps) => (
    <section className="modal-connection-credentials">
        <section className="modal-connection-credentials-pair">
            <span className="modal-connection-credentials-pair_label">{networkNameLablel}:</span>
            <b className="modal-connection-credentials-pair_value">{` ${networkId}`}</b>
        </section>
        <section className="modal-connection-credentials_pair">
            <span className="modal-connection-credentials-pair_label">{passwordLablel}:</span>
            <b className="modal-connection-credentials-pair_value">{` ${password}`}</b>
        </section>
    </section>
);
