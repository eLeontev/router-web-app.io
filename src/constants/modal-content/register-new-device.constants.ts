import {
    RegisterDeviceDropdownValue,
    RegisterDeviceInputValues,
    stateTypes,
} from '../../models/register-new-device.model';
import { modalLabels } from '../../models/modals.model';
import { cardsLabels } from '../../models/cards.model';
import { Options } from '../../models/common.model';

export const registerDeviceInputValues: RegisterDeviceInputValues = [
    {
        isRequired: true,
        stateType: stateTypes.deviceName,
        validatorType: stateTypes.deviceName,
        label: modalLabels.hostNameLabel,
        errorMessage: modalLabels.requiredFieldErrorLabel,
    },
    {
        isRequired: true,
        stateType: stateTypes.deviceMacAddress,
        validatorType: stateTypes.deviceMacAddress,
        label: cardsLabels.macAddressLabel,
        errorMessage: modalLabels.requiredFieldErrorLabel,
    },
];

export const connectionOptions: Options<modalLabels> = [
    {
        label: modalLabels.defaultPolicyLabel,
        id: '321',
    },
    {
        label: modalLabels.noInternetAccessLabel,
        id: '123',
    },
];

export const registerDeviceDropdownVaLue: RegisterDeviceDropdownValue = {
    options: connectionOptions,
    stateType: stateTypes.connectionType,
    label: modalLabels.connectionPolicyLabel,
};

export const defaultConnectionOptionId = connectionOptions[0].id;
