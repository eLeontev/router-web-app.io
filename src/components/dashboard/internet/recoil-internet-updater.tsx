import React, { MutableRefObject, useEffect, useRef } from 'react';
import { SetterOrUpdater, useRecoilState } from 'recoil';

import { internetState } from '../../../recoil-state/internet/internet.atom';

import { internetDetailsType, internetRequestDelay } from '../../../constants/cards.constants';
import {
    generateUpDownLoadTraffic,
    getSentReceivedTraffic,
} from '../../../services/internet-card.service';

import { InternetDetail, InternetDetails, TrafficInfo } from '../../../models/dashboard.model';
import { InternetState, SentReceivedTraffic } from '../../../models/internet.model';

export type ContextUpdaterProps = {
    details: InternetDetails;
    trafficInfo: TrafficInfo;
};

export const getValue = (details: InternetDetails, type: internetDetailsType): string =>
    (details.find((detail: InternetDetail) => detail.type === type) || { value: '' }).value;

const useInitInternetState = (
    updateInternetState: SetterOrUpdater<InternetState>,
    trafficInfo: TrafficInfo,
    details: InternetDetails
) => {
    useEffect(() => {
        updateInternetState({
            ...{ upload: trafficInfo.upload.current, download: trafficInfo.download.current },
            received: getValue(details, internetDetailsType.received),
            sent: getValue(details, internetDetailsType.sent),
        });
    }, [trafficInfo, details, updateInternetState]);
};

const useUpdateInternetState = (
    updateInternetState: SetterOrUpdater<InternetState>,
    sentReceivedRef: MutableRefObject<SentReceivedTraffic>
) => {
    useEffect(() => {
        const timerId = setInterval(() => {
            const sentReceivedTraffic = getSentReceivedTraffic(sentReceivedRef.current);
            sentReceivedRef.current = sentReceivedTraffic;

            updateInternetState({
                ...sentReceivedTraffic,
                upload: generateUpDownLoadTraffic(),
                download: generateUpDownLoadTraffic(),
            });
        }, internetRequestDelay);
        return () => clearInterval(timerId);
    }, [updateInternetState, sentReceivedRef]);
};

export const RecoilInternetUpdater = React.memo(({ details, trafficInfo }: ContextUpdaterProps) => {
    const [{ received, sent }, updateInternetState] = useRecoilState(internetState);
    const sentReceivedRef = useRef({ received, sent });

    useInitInternetState(updateInternetState, trafficInfo, details);
    useUpdateInternetState(updateInternetState, sentReceivedRef);

    return null;
});
