import React, { useContext } from 'react';
import './modal.scss';

import { ModalContext } from '../../context/modal.context';
import { Button } from './button';
import { ModalContentComponents } from '../../models/modals.model';
import { modalContentTypes } from '../../constants/modal.constants';
import { ConnectionModalContent } from '../modal-content/connection.content';

export type ModalComponent = {
    setModal: (value: null) => void;
    children: any;
};
const modalContentComponents: ModalContentComponents = {
    [modalContentTypes.connectionContentType]: ConnectionModalContent,
};

export const ModalComponent = React.memo(
    ({ children, setModal }: ModalComponent) => (
        <section
            className="modal-background"
            onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                (e.target as HTMLElement).className === 'modal-background' &&
                setModal(null)
            }
        >
            <section className="modal-content">
                <Button
                    className="close-modal-button"
                    buttonName="x"
                    buttonHandler={() => setModal(null)}
                />
                {children}
            </section>
        </section>
    )
);

export const Modal = React.memo(() => {
    const { modalInfo, setModal } = useContext(ModalContext);
    const ModalContent: any = modalInfo
        ? modalContentComponents[modalInfo.type]
        : null;

    return ModalContent ? (
        <ModalComponent setModal={setModal}>
            <ModalContent {...modalInfo} />
        </ModalComponent>
    ) : null;
});
