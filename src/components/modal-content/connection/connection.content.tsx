import React, { useEffect, useState } from 'react';
import './connection.content.scss';

import { ModalContentReadOnly } from '../common/modal-content';
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
        <ModalContentReadOnly title={title}>
            <h1 className="modal-content_print-title">KEENETIC</h1>
            {logoSrc ? <Logo src={logoSrc} className="connection-logo" /> : null}
            <p className="modal-content_description">{description}</p>
            <Logo src={qrCodeBase64} className="modal-content_qr-code" />
            <Credentials password={password} networkId={networkId} />
            <Actions
                {...{
                    ...(connectionInfoProps as ConnectionInfoProps),
                    setLogo,
                }}
            />
        </ModalContentReadOnly>
    );
});
