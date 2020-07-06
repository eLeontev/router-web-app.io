import { TrafficValue } from './dashboard.model';

export type InternetState = {
    download: TrafficValue;
    upload: TrafficValue;
    received: string;
    sent: string;
};

export type SentReceivedTraffic = {
    sent: string;
    received: string;
};

export type TrafficGraphProps = {
    max: TrafficValue;
    current: TrafficValue;
    isUpload: boolean;
};
