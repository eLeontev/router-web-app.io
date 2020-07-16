import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import './register-new-device.scss';

import { ModalContent } from '../common/modal-content';
import { ModalPair } from '../common/modal-pair';
import { ConfirmationMessage } from '../common/confirmation-message';

import { resetRegisterNewDeviceState } from '../../../recoil-state/register-new-device.state';

import { useGetTranslatedLabelsObject } from '../../../services/i18n.service';

import { registerDeviceFormValues } from '../../../constants/modal-content/register-new-device.constants';

import { modalLabels } from '../../../models/modals.model';
import { commonLabels } from '../../../models/common.model';
import { Labels } from '../../../models/i18n.model';

export const registerContent = () => {
    return (
        <>
            <section className="modal-main-form">
                {registerDeviceFormValues.map((values) => (
                    <ModalPair key={values.stateType} {...values} />
                ))}
            </section>
        </>
    );
};
export const RegisterNewDevice = () => {
    const resetModal = useSetRecoilState(resetRegisterNewDeviceState);

    const i18nLabels = useGetTranslatedLabelsObject<Labels>([
        modalLabels.registerNewDeviceTitleLabel,
        modalLabels.wirelessAccessControlTitleLabel,
        modalLabels.wirelessAccessControlDescriptionLabel,
        modalLabels.registerDeviceLabel,
        commonLabels.cancelButtonLabel,
    ]);

    useEffect(() => () => resetModal({}), [resetModal]);

    return (
        <ModalContent
            title={i18nLabels.registerNewDeviceTitleLabel}
            saveButtonLabel={i18nLabels.registerDeviceLabel}
            cancelButtonLabel={i18nLabels.cancelButtonLabel}
        >
            {registerContent()}
            <ConfirmationMessage />
        </ModalContent>
    );
};
