import React, { useContext, useEffect, useRef } from 'react';

import { InternetContext } from '../../../context/internet.context';
import { internetDetailsType, internetRequestDelay } from '../../../constants/cards.constants';
import { InternetDetail, InternetDetails, TrafficInfo } from '../../../models/dashboard.model';
import {
    generateUpDownLoadTraffic,
    getSentReceivedTraffic,
} from '../../../services/internet-card.service';

export type ContextUpdaterProps = {
    details: InternetDetails;
    trafficInfo: TrafficInfo;
};

export const getValue = (details: InternetDetails, type: internetDetailsType): string =>
    (details.find((detail: InternetDetail) => detail.type === type) || { value: '' }).value;

export const ContextUpdater = React.memo(
    ({ details, trafficInfo: { upload, download } }: ContextUpdaterProps) => {
        const upDownloadRef = useRef({ upload: upload.current, download: download.current });
        const detailsRef = useRef(details);

        const { internetState, updateTraffic } = useContext(InternetContext);
        const { sent, received } = internetState;

        const contextRef = useRef({ sent, received });

        useEffect(() => {
            updateTraffic({
                ...upDownloadRef.current,
                received: getValue(detailsRef.current, internetDetailsType.received),
                sent: getValue(detailsRef.current, internetDetailsType.sent),
            });
        }, [updateTraffic]);

        useEffect(() => {
            const timerId = setInterval(() => {
                const sentReceivedTraffic = getSentReceivedTraffic(contextRef);
                contextRef.current = sentReceivedTraffic;

                updateTraffic({
                    ...sentReceivedTraffic,
                    upload: generateUpDownLoadTraffic(),
                    download: generateUpDownLoadTraffic(),
                });
            }, internetRequestDelay);
            return () => clearInterval(timerId);
        }, [updateTraffic]);

        return null;
    }
);
