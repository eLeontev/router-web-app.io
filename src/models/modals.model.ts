import { modalContentTypes } from '../constants/modal.constants';
import { FunctionComponent } from 'react';
import { ConnectionInfo } from './dashboard.model';

export type SetLogo = (src: string) => void;

export type ConnectionInfoProps = ConnectionInfo & {
    name: string;
    range: string;
};

export type ConnectionInfoPropsWithSetters = ConnectionInfoProps & {
    setLogo: SetLogo;
};
export type ModalContentComponents = {
    [modalContentTypes.connectionContentType]: FunctionComponent<ConnectionInfoProps>;
};

export type ModalInfo = ConnectionInfoProps | null;
export type SetModal = (modalInfo: ModalInfo) => void;

export type ModalInfoContext = {
    modalInfo: ModalInfo;
    setModal: SetModal;
};

export enum modalLabels {
    networkNameLabel = 'networkNameLabel',
    passwordLabel = 'passwordLabel',
    connectionDescriptionLabel = 'connectionDescriptionLabel',
}

export enum dynamicModalLabels {
    connectionTitleLabel = 'connectionTitleLabel',
}
