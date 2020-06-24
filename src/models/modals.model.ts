import { modalContentTypes } from '../constants/modal.constants';
import { SFC } from 'react';
import { ConnectionInfo } from './cards.models';

export type ConnectionInfoProps = ConnectionInfo & {
    name: string;
    range: string;
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
