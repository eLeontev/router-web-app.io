import { internetDetailsType } from '../constants/cards.constants';
import { cardsLabels } from '../models/cards.model';

const { configuration, reboot } = internetDetailsType;
const {
    connectionEstablishedLabel,
    adGuardIsEnabledLabel,
    rebootLabel,
    configureLabel,
} = cardsLabels;

export type DynamicActionHandlers = {
    configuration: () => void;
    reboot: () => void;
};

const dynamicActionHandlers: DynamicActionHandlers = {
    configuration: () => console.log(123),
    reboot: () => console.log(321),
};

export const getDynamicDetailData = (type: internetDetailsType) => {
    const isConfigurationType = type === configuration;
    const valueLabel = isConfigurationType ? adGuardIsEnabledLabel : connectionEstablishedLabel;
    const buttonLabel = isConfigurationType ? configureLabel : rebootLabel;
    const buttonHandler = isConfigurationType
        ? dynamicActionHandlers.configuration
        : type === reboot
        ? dynamicActionHandlers.reboot
        : () => {};

    return {
        isConfigurationType,
        valueLabel,
        buttonLabel,
        buttonHandler,
    };
};
