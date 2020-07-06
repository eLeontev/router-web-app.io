import moment from 'moment';

import {
    paramTypes,
    SystemParam,
    SystemParams,
    SystemParamValue,
    UpdateParams,
} from '../models/dashboard.model';

export type ParamHandlerArguments = {
    value: SystemParamValue;
    startedTime: string;
};
export type ParamHandlers = {
    [key in paramTypes]: (paramHandlerArguments: ParamHandlerArguments) => SystemParamValue;
};

const RAMUnits = 'Mbytes';
export const updateRAMValue = ({ value }: ParamHandlerArguments): SystemParamValue => {
    const allMemory = parseFloat((value as string).split('/')[1]);
    const usedRAMinPercentage = Math.random();
    const usedRAMinUnits = Math.round(usedRAMinPercentage * allMemory);

    return `${Math.floor(usedRAMinPercentage * 100)}% (${usedRAMinUnits}/${allMemory} ${RAMUnits})`;
};

export const updateCPUValue = (): SystemParamValue => {
    return `${Math.floor(Math.random() * 100)}%`;
};

export const updateUptime = ({ startedTime }: ParamHandlerArguments): SystemParamValue => {
    const diff = moment(moment().diff(startedTime));

    return `${diff.format('D')} days ${diff.format('H:mm:ss')}`;
};

export const getCurrentTime = (): SystemParamValue => {
    const now = moment();
    return now.format('M/DD/YYYY H:mm:ss');
};

export const inactive = (): SystemParamValue => '';

const paramHandlers: ParamHandlers = {
    [paramTypes.ramUsage]: updateRAMValue,
    [paramTypes.cpuUsage]: updateCPUValue,
    [paramTypes.uptime]: updateUptime,
    [paramTypes.currentTime]: getCurrentTime,
    [paramTypes.inactive]: inactive,
};

export const updateParamsMock = (
    activeParamTypes: SystemParams,
    updateParams: UpdateParams,
    startedTime: string
): void =>
    updateParams(
        activeParamTypes.map(
            (param: SystemParam): SystemParam => ({
                ...param,
                value: paramHandlers[param.paramType]({ value: param.value, startedTime }),
            })
        )
    );
