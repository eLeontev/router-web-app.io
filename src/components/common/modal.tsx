import React, { useContext, PropsWithChildren } from 'react';

import './modal.scss';

import { Button } from './button';

import { ModalContext } from '../../context/modal.context';
import { ModalContentComponents } from '../../models/modals.model';
import { modalContentTypes } from '../../constants/modal.constants';
import { ConnectionModalContent } from '../modal-content/connection.content';

export type ModalComponent = PropsWithChildren<{
    setModal: (value: null) => void;
}>;

const modalContentComponents: ModalContentComponents = {
    [modalContentTypes.connectionContentType]: ConnectionModalContent,
};

export const ModalComponent = React.memo(({ children, setModal }: ModalComponent) => (
    <section
        className="modal-background"
        onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
            (e.target as HTMLElement).className === 'modal-background' && setModal(null)
        }
    >
        <section className="modal-content">
            <Button
                buttonName=""
                className="close-modal-button"
                buttonHandler={() => setModal(null)}
            />
            {children}
        </section>
    </section>
));

export const Modal = React.memo(() => {
    const { modalInfo, setModal } = useContext(ModalContext);
    const ModalContent = modalInfo ? modalContentComponents[modalInfo.type] : null;

    return ModalContent && modalInfo ? (
        <ModalComponent setModal={setModal}>
            <ModalContent {...modalInfo} />
        </ModalComponent>
    ) : null;
});
