import { sAtom, sSelector } from '../utils/simple-recoil.util';

import { deviceSettings } from '../mock/devices-list.mock';
import { speedKeys, SpeedValue } from '../models/devices-list.model';

const {
    isAsymmetric,
    filterId,
    speedLimits: { common, download, upload },
} = deviceSettings;

export const defaultFilterState = sAtom<string>(filterId);
export const filterState = sAtom<string>(filterId);

export const defaultSpeedStates = {
    [speedKeys.common]: sAtom<SpeedValue>({ ...common }),
    [speedKeys.upload]: sAtom<SpeedValue>({ ...upload }),
    [speedKeys.download]: sAtom<SpeedValue>({ ...download }),
};

export const speedStates = {
    [speedKeys.common]: sAtom<SpeedValue>({ ...common }),
    [speedKeys.upload]: sAtom<SpeedValue>({ ...upload }),
    [speedKeys.download]: sAtom<SpeedValue>({ ...download }),
};

export const defaultAsymmetricState = sAtom<boolean>(isAsymmetric);
export const asymmetricState = sAtom<boolean>(isAsymmetric);

export const validatorState = sSelector(({ get }) => ({
    filter: {
        default: get(defaultFilterState),
        input: get(filterState),
    },
    asymmetric: {
        default: get(defaultAsymmetricState),
        input: get(asymmetricState),
    },
    common: {
        default: get(defaultSpeedStates.common),
        input: get(speedStates.common),
    },
    upload: {
        default: get(defaultSpeedStates.upload),
        input: get(speedStates.upload),
    },
    download: {
        default: get(defaultSpeedStates.download),
        input: get(speedStates.download),
    },
}));

export const deviceDirtyState = sSelector<boolean>(({ get }) => {
    const { filter, asymmetric, common, download, upload } = get(validatorState);
    const isDirtyFilters = filter.default !== filter.input;
    const isDirtyAsymmetric = asymmetric.default !== asymmetric.input;
    const isDirtySpeed = [common, download, upload].some(
        (v) => v.default.value !== v.input.value || v.default.unitId !== v.input.unitId
    );

    return isDirtyFilters || isDirtyAsymmetric || isDirtySpeed;
});
