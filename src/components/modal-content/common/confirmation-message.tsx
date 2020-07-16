import React, { useContext } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import './confirmation-message.scss';

import { ModalContext } from '../../../context/modal.context';

import { Button } from '../../common/button';

import { useGetTranslatedLabels } from '../../../services/i18n.service';

import { modalLabels } from '../../../models/modals.model';
import {
    confirmationDialogState,
    dirtyModalState,
} from '../../../recoil-state/confirmation-dialog.state';

export const ConfirmationMessage = () => {
    const { setModal } = useContext(ModalContext);
    const setDirty = useSetRecoilState(dirtyModalState);
    const [shouldDisplayDialog, setConfirmationDialog] = useRecoilState(confirmationDialogState);
    const [stayLabel, leaveLabel] = useGetTranslatedLabels([
        modalLabels.stayButtonLabel,
        modalLabels.leaveButtonLabel,
    ]);
    return shouldDisplayDialog ? (
        <section className="confirmation-dialog">
            <section className="confirmation-dialog-content">
                <Button
                    buttonHandler={() => {
                        setModal(null);
                        setDirty(false);
                        setConfirmationDialog(false);
                    }}
                    buttonName={leaveLabel}
                    className="confirmation-button confirmation-button__save"
                />
                <Button
                    buttonHandler={() => {
                        setConfirmationDialog(false);
                    }}
                    buttonName={stayLabel}
                    className="confirmation-button confirmation-button__cancel"
                />
            </section>
        </section>
    ) : null;
};
