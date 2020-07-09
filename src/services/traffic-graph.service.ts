import { MutableRefObject } from 'react';

import { renderGraph } from '../utils/d3-graph';

import { bModifier, countOfDisplayedNodes, mModifier } from '../constants/cards.constants';
import { navBarToggleTime } from '../constants/common.constants';

import { TrafficValue, TrafficValues } from '../models/dashboard.model';
import { cardsLabels } from '../models/cards.model';

export const getModifier = (isUpload: boolean) => (isUpload ? 'upload' : 'download');

const getRange = (unit: cardsLabels) =>
    [cardsLabels.kbitsLabel, cardsLabels.mbitsLabel].indexOf(unit) ? mModifier : bModifier;

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

const emptyWrapper = (cb: () => void) => cb();
export const callRenderGraph = (
    nodesRef: MutableRefObject<TrafficValues>,
    maxRef: MutableRefObject<TrafficValue>,
    isUpload: boolean,
    withTimer: boolean
): void | NodeJS.Timeout => {
    const wrapper = withTimer ? setTimeout : emptyWrapper;
    return wrapper(() => {
        renderGraph(
            'traffic-graph',
            getModifier(isUpload),
            getDataset(nodesRef.current, maxRef.current)
        );
    }, navBarToggleTime);
};
