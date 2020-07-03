import { bModifier, countOfDisplayedNodes, mModifier, units } from '../constants/cards.constants';

import { TrafficValue, TrafficValues } from '../models/dashboard.model';

const getRange = (unit: string) => (units.indexOf(unit) ? mModifier : bModifier);

export const getDataset = (current: TrafficValues, max: TrafficValue) => {
    const maxRange = max.value * mModifier;
    const currentLength = current.length;
    const arrayLength =
        countOfDisplayedNodes - currentLength > 0 ? countOfDisplayedNodes - currentLength : 0;

    const emptyNodes = new Array(arrayLength).fill('').map(() => ({ y: 0 }));

    const filledNodes = current.map(({ value, unit }: TrafficValue) => ({
        y: (value * getRange(unit)) / maxRange,
    }));

    return [{ y: 0 }, ...emptyNodes, ...filledNodes, { y: 0 }];
};

export const getLimitedCountOfNodes = (
    trafficValues: TrafficValues,
    trafficValue: TrafficValue
): TrafficValues => {
    let updatedTrafficValues = [...trafficValues, trafficValue];

    if (updatedTrafficValues.length > countOfDisplayedNodes) {
        const [, ...updatedTrafficValuesWithoutFirstValues] = updatedTrafficValues;
        updatedTrafficValues = updatedTrafficValuesWithoutFirstValues;
    }

    return updatedTrafficValues;
};
