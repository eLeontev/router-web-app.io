import { RecoilValueReadOnly, SetterOrUpdater, useRecoilState, useRecoilValue } from 'recoil';
import {
    asymmetricState,
    defaultAsymmetricState,
    defaultFilterState,
    defaultSpeedStates,
    filterState,
    speedStates,
} from '../recoil-state/devices-list.settings.state';
import { DeviceSettingsStates, DevicesSettings } from '../models/devices-list.model';

const setDeviceValues = (devicesSettings: DevicesSettings) =>
    devicesSettings.forEach(({ state, set }: DeviceSettingsStates) =>
        (set as SetterOrUpdater<boolean>)(state as boolean)
    );

export const useDirty = (validatorState: RecoilValueReadOnly<boolean>) => {
    const isDirty = useRecoilValue(validatorState);

    const [DFState, setDFState] = useRecoilState(defaultFilterState);
    const [FState, setFState] = useRecoilState(filterState);

    const [DAState, setDAState] = useRecoilState(defaultAsymmetricState);
    const [AState, setAState] = useRecoilState(asymmetricState);

    const [DCState, setDCState] = useRecoilState(defaultSpeedStates.common);
    const [CState, setCState] = useRecoilState(speedStates.common);
    const [DDState, setDDState] = useRecoilState(defaultSpeedStates.download);
    const [DState, setDState] = useRecoilState(speedStates.download);
    const [DUState, setDUState] = useRecoilState(defaultSpeedStates.upload);
    const [UState, setUState] = useRecoilState(speedStates.upload);

    return {
        isDirty,
        onSave: (cb: any) => () => {
            cb();
            setDeviceValues([
                {
                    set: setDFState,
                    state: FState,
                },
                {
                    set: setDAState,
                    state: AState,
                },
                {
                    set: setDCState,
                    state: CState,
                },
                {
                    set: setDDState,
                    state: DState,
                },
                {
                    set: setDUState,
                    state: UState,
                },
            ]);
        },
        onCancel: () =>
            setDeviceValues([
                {
                    set: setFState,
                    state: DFState,
                },
                {
                    set: setAState,
                    state: DAState,
                },
                {
                    set: setCState,
                    state: DCState,
                },
                {
                    set: setDState,
                    state: DDState,
                },
                {
                    set: setUState,
                    state: DUState,
                },
            ]),
    };
};
