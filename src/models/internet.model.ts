import { TrafficValue } from './dashboard.model';

export type SpeedTrafficState = {
    download: TrafficValue;
    upload: TrafficValue;
};
export type InternetState = SpeedTrafficState & {
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
