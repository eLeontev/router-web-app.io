import { Labels } from './i18n.model';
import { Options } from './common.model';

export enum stateTypes {
    deviceName = 'deviceName',
    deviceMacAddress = 'deviceMacAddress',
    connectionType = 'connectionType',
}

export type RegisterDeviceValue = {
    label: Labels;
    stateType: stateTypes;
};

export type RegisterDeviceInputValue = RegisterDeviceValue & {
    validatorType: stateTypes;
    isRequired: boolean;
    errorMessage: Labels;
};

export type RegisterDeviceDropdownValue = RegisterDeviceValue & {
    options: Options<Labels>;
};

export type RegisterDeviceInputValues = Array<RegisterDeviceInputValue>;

export type Validator = (value: string) => boolean;
export type Validators = {
    [validator in stateTypes]: Validator;
};
