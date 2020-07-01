import { modalContentTypes } from '../constants/modal.constants';
import { SFC } from 'react';
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
    [modalContentTypes.connectionContentType]: SFC<ConnectionInfoProps>;
};

export type ModalInfo = ConnectionInfoProps | null;
export type SetModal = (modalInfo: ModalInfo) => void;

export type ModalInfoContext = {
    modalInfo: ModalInfo;
    setModal: SetModal;
};
