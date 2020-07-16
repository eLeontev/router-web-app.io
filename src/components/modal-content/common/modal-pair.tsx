import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import './modal-pair.scss';

import { InputWithValidation } from '../../common/input';

import { dirtyModalState } from '../../../recoil-state/confirmation-dialog.state';
import { deviceStates } from '../../../recoil-state/register-new-device.state';

import { useGetTranslatedLabels } from '../../../services/i18n.service';
import { getValidatorByType } from '../../../services/register-new-device.service';

import { pairTypes, RegisterDeviceFormValue } from '../../../models/register-new-device.model';

const inputComponents = {
    [pairTypes.withTextInput]: InputWithValidation,
};

export const ModalPair = ({
    stateType,
    label,
    type,
    isRequired,
    errorMessage,
    validatorType,
}: RegisterDeviceFormValue) => {
    const InputComponent = inputComponents[type];
    const setDirty = useSetRecoilState(dirtyModalState);
    const [value, setState] = useRecoilState(deviceStates[stateType]);
    const [i18nLabel, i18nErrorMessage] = useGetTranslatedLabels([label, errorMessage]);
    const validator = getValidatorByType(validatorType);

    return (
        <section className="modal-pair">
            <p className="modal-pair__label">{i18nLabel}</p>
            <InputComponent
                className="modal-pair__value"
                name={label}
                value={value}
                onChange={(value) => {
                    setDirty(true);
                    setState(value);
                }}
                isRequired={isRequired}
                errorMessage={i18nErrorMessage}
                validator={validator}
            />
        </section>
    );
};
