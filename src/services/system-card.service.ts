import { SplitParams, SystemParam } from '../models/dashboard.model';

export const splitSystemParams = (systemParams: Array<SystemParam>) =>
    systemParams.reduce(
        (params: SplitParams, param: SystemParam): SplitParams => {
            const field = param.isActive ? 'dynamicSystemParams' : 'staticSystemParams';
            params[field].push(param);

            return params;
        },
        {
            staticSystemParams: [],
            dynamicSystemParams: [],
        }
    );
