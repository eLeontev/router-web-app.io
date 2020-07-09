import { ActionNames, actionsLabels } from '../models/actions.model';

export const actionNames: ActionNames = {
    addLogoType: actionsLabels.addLogoType,
    copyType: actionsLabels.copyType,
    printType: actionsLabels.printType,
    wpsType: actionsLabels.wpsType,
    activatedWpsType: actionsLabels.activatedWpsType,
};

export const wpsActivationDuration = 120; // 2min in sec
