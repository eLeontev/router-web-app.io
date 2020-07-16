import React, { PropsWithChildren, useContext } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { Dirty } from '../../common/dirty';

import { ModalContext } from '../../../context/modal.context';

import { validatorState } from '../../../recoil-state/register-new-device.state';
import {
    confirmationDialogState,
    dirtyModalState,
} from '../../../recoil-state/confirmation-dialog.state';

export type ModalContentProps = {
    title: string;
    saveButtonLabel: string;
    cancelButtonLabel: string;
};

export const ModalContent = ({
    children,
    title,
    saveButtonLabel,
    cancelButtonLabel,
}: PropsWithChildren<ModalContentProps>) => {
    const { setModal } = useContext(ModalContext);
    const [isDirty, setDirty] = useRecoilState(dirtyModalState);
    const toggleConfirmationDialog = useSetRecoilState(confirmationDialogState);
    const isValid = useRecoilValue(validatorState);

    return (
        <section className="modal-connection">
            <h3 className="modal-connection_title">{title}</h3>
            {children}
            <Dirty
                isDirty={true}
                isValid={isValid}
                onSave={() => {
                    setModal(null);
                    setDirty(false);
                }}
                onCancel={() => (isDirty ? toggleConfirmationDialog(true) : setModal(null))}
                saveButtonLabel={saveButtonLabel}
                cancelButtonLabel={cancelButtonLabel}
                classNameModifier="modal"
            />
        </section>
    );
};
