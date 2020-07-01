import { ActionNames } from '../models/actions.model';

export const actionNames: ActionNames = {
    addLogoType: 'Add logo',
    copyType: 'Copy password',
    printType: 'Print',
    wpsType: 'WPS',
    activatedWpsType: 'Stop WPS session',
};

export const wpsActivationDuration = 120000; // 2min
