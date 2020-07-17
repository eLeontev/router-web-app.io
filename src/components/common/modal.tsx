import React, { useContext, PropsWithChildren, useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import './modal.scss';

import { Button } from './button';
import { ConnectionModalContent } from '../modal-content/connection/connection.content';
import { RegisterNewDevice } from '../modal-content/register-new-device/register-new-device';
import { ConfirmationMessage } from '../modal-content/common/confirmation-message';

import { ModalContext } from '../../context/modal.context';
import { modalContentTypes } from '../../constants/modal.constants';
import {
    confirmationDialogState,
    dirtyModalState,
} from '../../recoil-state/confirmation-dialog.state';

import { ModalContentComponents } from '../../models/modals.model';

export type ModalComponent = PropsWithChildren<{
    setModal: (value: null) => void;
}>;

const modalContentComponents: ModalContentComponents = {
    [modalContentTypes.connectionContentType]: ConnectionModalContent,
    [modalContentTypes.registerDeviceType]: RegisterNewDevice,
};

export const ModalComponent = React.memo(({ children, setModal }: ModalComponent) => (
    <section
        className="modal-background"
        onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
            (e.target as HTMLElement).className === 'modal-background' && setModal(null)
        }
    >
        <section className="modal-window">
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
    const toggleConfirmationDialog = useSetRecoilState(confirmationDialogState);
    const [isDirty, setDirty] = useRecoilState(dirtyModalState);

    const closeModal = useCallback(() => {
        if (isDirty) {
            toggleConfirmationDialog(true);
        } else {
            setDirty(false);
            setModal(null);
        }
    }, [toggleConfirmationDialog, isDirty, setDirty, setModal]);

    return ModalContent && modalInfo ? (
        <ModalComponent setModal={closeModal}>
            <ModalContent {...modalInfo} />
            <ConfirmationMessage />
        </ModalComponent>
    ) : null;
});
