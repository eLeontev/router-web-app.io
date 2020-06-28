import React, { useEffect, useState } from 'react';
import './connection.content.scss';

import { ConnectionInfoProps } from '../../models/modals.model';
import { generateQR } from '../../services/qr-code-generator.service';
import { ButtonWithPostHandler } from '../common/button';
import { ConnectionAction } from '../../models/dashboard.model';
import { actionNames } from '../../constants/actions.constants';
import { modalActionHandlers } from '../../actions/actions';

const networkNameLablel = 'Network name (SSID)';
const passwordLablel = 'Password';
const description = `Scan this QR code with your phone's camera to connect to the Wi-Fi network.`;

const getTitle = (name: string, range: string) =>
    `Connection information for the '${name}' ${range} Wi-Fi network`;
const getActionStatus = (isActive: boolean) =>
    `modal-action-button__${isActive ? 'active' : 'inactive'}`;

const getActionButton = (
    { actionType, isActive }: ConnectionAction,
    connectionInfoProps: ConnectionInfoProps
) => (
    <ButtonWithPostHandler
        key={actionType}
        className={`modal-action-button ${getActionStatus(isActive)}`}
        buttonName={actionNames[actionType]}
        buttonHandler={
            isActive
                ? () => modalActionHandlers[actionType](connectionInfoProps)
                : () => {}
        }
    />
);

export const ConnectionModalContent = React.memo(
    (connectionInfoProps: ConnectionInfoProps) => {
        const {
            actions,
            credentials: { networkId, password },
            url,
            name,
            range,
        } = connectionInfoProps;

        const [qrCodeBase64, setQRCode] = useState('');
        useEffect(() => {
            generateQR(url).then(setQRCode).catch(setQRCode);
        }, [url, setQRCode]);

        return (
            <section className="modal-connection">
                <h3 className="modal-connection_title">
                    {getTitle(name, range)}
                </h3>
                <p className="modal-connection_description">{description}</p>
                <img
                    className="modal-connection_qr-code"
                    src={qrCodeBase64}
                    alt="loading qr code"
                />
                <section className="modal-connection-credentials">
                    <section className="modal-connection-credentials-pair">
                        <span className="modal-connection-credentials-pair_label">
                            {networkNameLablel}:
                        </span>
                        <b className="modal-connection-credentials-pair_value">
                            {` ${networkId}`}
                        </b>
                    </section>
                    <section className="modal-connection-credentials_pair">
                        <span className="modal-connection-credentials-pair_label">
                            {passwordLablel}:
                        </span>
                        <b className="modal-connection-credentials-pair_value">
                            {` ${password}`}
                        </b>
                    </section>
                </section>
                <section className="actions">
                    <section className="actions-main">
                        {actions.main.map((action: ConnectionAction) =>
                            getActionButton(action, connectionInfoProps)
                        )}
                    </section>
                    <section className="acitons-wps">
                        {actions.WPS
                            ? getActionButton(actions.WPS, connectionInfoProps)
                            : null}
                    </section>
                </section>
            </section>
        );
    }
);
