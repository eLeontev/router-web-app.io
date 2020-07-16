import {
    pairTypes,
    RegisterDeviceFormValues,
    stateTypes,
} from '../../models/register-new-device.model';
import { modalLabels } from '../../models/modals.model';
import { cardsLabels } from '../../models/cards.model';

export const registerDeviceFormValues: RegisterDeviceFormValues = [
    {
        stateType: stateTypes.deviceName,
        type: pairTypes.withTextInput,
        isRequired: true,
        validatorType: stateTypes.deviceName,
        label: modalLabels.hostNameLabel,
        errorMessage: modalLabels.requiredFieldErrorLabel,
    },
    {
        stateType: stateTypes.deviceMacAddress,
        type: pairTypes.withTextInput,
        isRequired: true,
        validatorType: stateTypes.deviceMacAddress,
        label: cardsLabels.macAddressLabel,
        errorMessage: modalLabels.requiredFieldErrorLabel,
    },
];
