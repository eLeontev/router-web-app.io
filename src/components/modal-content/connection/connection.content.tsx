import React, { useEffect, useState } from 'react';
import './connection.content.scss';

import { Logo } from '../../common/logo';
import { Actions } from './actions';
import { Credentials } from './credentials';

import { generateQR } from '../../../services/qr-code-generator.service';
import {
    useGetDynamicTranslatedLabel,
    useGetTranslatedLabel,
} from '../../../services/i18n.service';

import {
    ConnectionInfoProps,
    dynamicModalLabels,
    ModalInfo,
    modalLabels,
} from '../../../models/modals.model';

export const ConnectionModalContent = React.memo((connectionInfoProps: ModalInfo) => {
    const {
        credentials: { networkId, password },
        url,
        name,
        range,
    } = connectionInfoProps as ConnectionInfoProps;

    const description = useGetTranslatedLabel(modalLabels.connectionDescriptionLabel);
    const title = useGetDynamicTranslatedLabel(dynamicModalLabels.connectionTitleLabel, [
        name,
        range,
    ]);

    const [qrCodeBase64, setQRCode] = useState('');
    const [logoSrc, setLogo] = useState('');

    useEffect(() => {
        generateQR(url).then(setQRCode).catch(setQRCode);
    }, [url, setQRCode]);

    return (
        <section className="modal-connection">
            <h1 className="modal-connection_print-title">KEENETIC</h1>
            <h3 className="modal-connection_title">{title}</h3>
            {logoSrc ? <Logo src={logoSrc} className="connection-logo" /> : null}
            <p className="modal-connection_description">{description}</p>
            <Logo src={qrCodeBase64} className="modal-connection_qr-code" />
            <Credentials password={password} networkId={networkId} />
            <Actions
                {...{
                    ...(connectionInfoProps as ConnectionInfoProps),
                    setLogo,
                }}
            />
        </section>
    );
});
