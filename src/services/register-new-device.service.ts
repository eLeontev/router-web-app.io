import { macAddressLength } from '../constants/devices-list.constants';

import { stateTypes, Validator, Validators } from '../models/register-new-device.model';

export const validators: Validators = {
    deviceMacAddress: (value: string) => value.length === macAddressLength,
    deviceName: (value: string) => Boolean(value.length),
};

export const getValidatorByType = (type: stateTypes): Validator => validators[type];
