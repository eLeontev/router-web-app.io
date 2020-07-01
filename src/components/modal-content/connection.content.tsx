import React, { useEffect, useState } from 'react';
import './connection.content.scss';

import { Logo } from '../common/logo';
import { Actions } from './actions';

import { generateQR } from '../../services/qr-code-generator.service';

import { ConnectionInfoProps } from '../../models/modals.model';
import { Credentials } from './credentials';

const description = `Scan this QR code with your phone's camera to connect to the Wi-Fi network.`;

const getTitle = (name: string, range: string) =>
    `Connection information for the '${name}' ${range} Wi-Fi network`;

export const ConnectionModalContent = React.memo(
    (connectionInfoProps: ConnectionInfoProps) => {
        const {
            credentials: { networkId, password },
            url,
            name,
            range,
        } = connectionInfoProps;

        const [qrCodeBase64, setQRCode] = useState('');
        const [logoSrc, setLogo] = useState('');

        useEffect(() => {
            generateQR(url).then(setQRCode).catch(setQRCode);
        }, [url, setQRCode]);

        return (
            <section className="modal-connection">
                <h1 className="modal-connection_print-title">KEENETIC</h1>
                <h3 className="modal-connection_title">
                    {getTitle(name, range)}
                </h3>
                {logoSrc ? (
                    <Logo src={logoSrc} className="connection-logo" />
                ) : null}
                <p className="modal-connection_description">{description}</p>
                <Logo src={qrCodeBase64} className="modal-connection_qr-code" />
                <Credentials password={password} networkId={networkId} />
                <Actions
                    {...{
                        ...connectionInfoProps,
                        setLogo,
                    }}
                />
            </section>
        );
    }
);
