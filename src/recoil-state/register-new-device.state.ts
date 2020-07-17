import { selector } from 'recoil';
import { sAtom, sSelector } from '../utils/simple-recoil.util';

import { validators } from '../services/register-new-device.service';

import { defaultConnectionOptionId } from '../constants/modal-content/register-new-device.constants';

import { stateTypes } from '../models/register-new-device.model';

export const deviceNameState = sAtom<string>('');

export const deviceMacAddressState = sAtom<string>('');

export const deviceConnectionTypeState = sAtom<string>(defaultConnectionOptionId);

export const validatorState = sSelector<boolean>(
    ({ get }) =>
        validators.deviceName(get(deviceNameState)) &&
        validators.deviceMacAddress(get(deviceMacAddressState))
);

export const deviceStates = {
    [stateTypes.deviceName]: deviceNameState,
    [stateTypes.deviceMacAddress]: deviceMacAddressState,
    [stateTypes.connectionType]: deviceConnectionTypeState,
};

export const resetRegisterNewDeviceState = selector({
    key: 'resetRegisterNewDeviceStateKey',
    get: () => ({}),
    set: ({ set }) => {
        set(deviceNameState, '');
        set(deviceMacAddressState, '');
        set(deviceConnectionTypeState, defaultConnectionOptionId);
    },
});
