import { Labels } from './i18n.model';

export enum stateTypes {
    deviceName = 'deviceName',
    deviceMacAddress = 'deviceMacAddress',
}

export enum pairTypes {
    withTextInput = 'withTextInput',
}

export type RegisterDeviceFormValue = {
    type: pairTypes;
    stateType: stateTypes;
    validatorType: stateTypes;
    isRequired: boolean;
    label: Labels;
    errorMessage: Labels;
};

export type RegisterDeviceFormValues = Array<RegisterDeviceFormValue>;

export type Validator = (value: string) => boolean;
export type Validators = {
    [validator in stateTypes]: Validator;
};
