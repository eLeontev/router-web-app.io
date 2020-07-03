import { TrafficValue } from '../models/dashboard.model';
import { units } from '../constants/cards.constants';

export type SentReceivedTraffic = {
    sent: string;
    received: string;
};

export const generateTrafficValue = (value: string) => {
    const [strValue, units] = value.split(' ');
    return `${Number(strValue) + 1} ${units}`;
};

export const getSentReceivedTraffic = ({
    current: { received, sent },
}: {
    current: SentReceivedTraffic;
}): SentReceivedTraffic => {
    return {
        sent: generateTrafficValue(sent || '54 Mbytes'),
        received: generateTrafficValue(received || '11 Mbytes'),
    };
};

export const generateUpDownLoadTraffic = (): TrafficValue => {
    return {
        unit: units[Math.round(Math.random())],
        value: Math.round(Math.random() * 500) / 10,
    };
};
