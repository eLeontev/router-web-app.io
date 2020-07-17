import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import './register-new-device.scss';

import { ModalContent } from '../common/modal-content';
import { ModalInputPair, ModalDropdownPair } from '../common/modal-pair';

import { resetRegisterNewDeviceState } from '../../../recoil-state/register-new-device.state';

import { useGetTranslatedLabels } from '../../../services/i18n.service';

import {
    registerDeviceDropdownVaLue,
    registerDeviceInputValues,
} from '../../../constants/modal-content/register-new-device.constants';

import { modalLabels } from '../../../models/modals.model';
import { commonLabels } from '../../../models/common.model';
import { WirelessAccessControl } from './wireless-access-control';

export const registerContent = () => {
    return (
        <>
            <section className="modal-main-form modal-main-form__with-separator">
                {registerDeviceInputValues.map((values) => (
                    <ModalInputPair key={values.stateType} {...values} />
                ))}
            </section>
            <section className="modal-main-form modal-main-form__with-separator">
                <ModalDropdownPair {...registerDeviceDropdownVaLue} />
            </section>
        </>
    );
};

export const RegisterNewDevice = () => {
    const resetModal = useSetRecoilState(resetRegisterNewDeviceState);

    const [title, saveButtonLabel, cancelButtonLabel] = useGetTranslatedLabels([
        modalLabels.registerNewDeviceTitleLabel,
        modalLabels.registerDeviceLabel,
        commonLabels.cancelButtonLabel,
    ]);

    useEffect(() => () => resetModal({}), [resetModal]);

    return (
        <ModalContent
            shouldDisplayDirtyBar={true}
            title={title}
            saveButtonLabel={saveButtonLabel}
            cancelButtonLabel={cancelButtonLabel}
        >
            {registerContent()}
            <WirelessAccessControl />
        </ModalContent>
    );
};
