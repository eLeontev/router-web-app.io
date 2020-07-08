import { TrafficValue } from '../models/dashboard.model';
import { cardsLabels } from '../constants/cards.constants';
import { SentReceivedTraffic } from '../models/internet.model';

const sentReceivedUnits = [cardsLabels.mbitLabel, cardsLabels.mbitLabel];
export const getSentReceivedTraffic = (): SentReceivedTraffic => ({
    sent: generateUpDownLoadTraffic(sentReceivedUnits),
    received: generateUpDownLoadTraffic(sentReceivedUnits),
});

export const generateUpDownLoadTraffic = (sentReceivedUnits?: Array<cardsLabels>): TrafficValue => {
    const unitsLabels = sentReceivedUnits
        ? sentReceivedUnits
        : [cardsLabels.mbitsLabel, cardsLabels.mbitsLabel];
    return {
        unit: unitsLabels[Math.round(Math.random())],
        value: Math.round(Math.random() * 500) / 10,
    };
};
