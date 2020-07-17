import React, { PropsWithChildren } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import './modal-pair.scss';

import { InputWithValidation } from '../../common/input';
import { Dropdown } from '../../common/dropdown';

import { dirtyModalState } from '../../../recoil-state/confirmation-dialog.state';
import { deviceStates } from '../../../recoil-state/register-new-device.state';

import { useGetTranslatedLabel, useGetTranslatedLabels } from '../../../services/i18n.service';
import { getValidatorByType } from '../../../services/register-new-device.service';

import { useGetDropdownOptions } from '../../../hooks/prepare-options-to-dropdown.hook';

import {
    RegisterDeviceInputValue,
    RegisterDeviceDropdownValue,
} from '../../../models/register-new-device.model';

export type ModalPairStaticProps = PropsWithChildren<{
    i18nLabel: string;
    isAligned?: boolean;
}>;
export const ModalPairStatic = ({ children, i18nLabel, isAligned }: ModalPairStaticProps) => (
    <section className={`modal-pair ${isAligned ? 'modal-pair__aligned' : ''}`}>
        <p className="modal-pair__label">{i18nLabel}</p>
        {children}
    </section>
);

export const ModalDropdownPair = ({ label, stateType, options }: RegisterDeviceDropdownValue) => {
    const setDirty = useSetRecoilState(dirtyModalState);
    const [selectedOptionId, setState] = useRecoilState(deviceStates[stateType]);
    const i18nLabel = useGetTranslatedLabel(label);
    const dropdownOptions = useGetDropdownOptions(options, selectedOptionId);

    return (
        <ModalPairStatic i18nLabel={i18nLabel}>
            <Dropdown
                dropdownOptions={dropdownOptions}
                classNameModifier="modal-pair__value"
                onChange={(value) => {
                    setDirty(true);
                    setState(value);
                }}
            />
        </ModalPairStatic>
    );
};

export const ModalInputPair = ({
    stateType,
    label,
    isRequired,
    errorMessage,
    validatorType,
}: RegisterDeviceInputValue) => {
    const setDirty = useSetRecoilState(dirtyModalState);
    const [value, setState] = useRecoilState(deviceStates[stateType]);
    const [i18nLabel, i18nErrorMessage] = useGetTranslatedLabels([label, errorMessage]);
    const validator = getValidatorByType(validatorType);

    return (
        <ModalPairStatic i18nLabel={i18nLabel}>
            <InputWithValidation
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
        </ModalPairStatic>
    );
};
