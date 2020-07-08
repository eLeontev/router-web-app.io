import { TrafficValue } from './dashboard.model';

export type InternetState = {
    download: TrafficValue;
    upload: TrafficValue;
    received: TrafficValue;
    sent: TrafficValue;
};

export type SentReceivedTraffic = {
    sent: TrafficValue;
    received: TrafficValue;
};

export type TrafficGraphProps = {
    max: TrafficValue;
    current: TrafficValue;
    isUpload: boolean;
};
