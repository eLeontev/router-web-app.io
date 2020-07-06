import { TrafficValue } from '../models/dashboard.model';
import { units } from '../constants/cards.constants';
import { SentReceivedTraffic } from '../models/internet.model';

export const generateTrafficValue = (value: string) => {
    const [strValue, units] = value.split(' ');
    return `${Number(strValue) + 1} ${units}`;
};

export const getSentReceivedTraffic = (sentReceived: SentReceivedTraffic): SentReceivedTraffic => ({
    sent: generateTrafficValue(sentReceived.sent || '54 Mbytes'),
    received: generateTrafficValue(sentReceived.received || '11 Mbytes'),
});

export const generateUpDownLoadTraffic = (): TrafficValue => ({
    unit: units[Math.round(Math.random())],
    value: Math.round(Math.random() * 500) / 10,
});
