import { devicesListLabels } from '../models/devices-list.model';
import { Options } from '../models/common.model';
import { cardsLabels } from '../models/cards.model';

export const filterOptions: Options<devicesListLabels> = [
    {
        id: '123',
        label: devicesListLabels.withoutFilteringLabel,
    },
    {
        id: '321',
        label: devicesListLabels.withoutADCLabel,
    },
    {
        id: '431',
        label: devicesListLabels.familyLabel,
    },
];

export const speedOptions: Options<cardsLabels> = [
    {
        id: '123',
        label: cardsLabels.kbitsLabel,
    },
    {
        id: '321',
        label: cardsLabels.mbitsLabel,
    },
];
