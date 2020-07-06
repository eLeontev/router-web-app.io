import React from 'react';
import { useRecoilValue } from 'recoil';
import './traffic.scss';

import { TrafficGraph } from './traffic-graph';

import { speedTrafficState } from '../../../recoil-state/internet/speed.traffic.selector';

import { trafficType, trafficTypeLabel } from '../../../constants/cards.constants';
import { Traffic, TrafficValue } from '../../../models/dashboard.model';

export const getTrafficValue = ({ unit, value }: TrafficValue) => `${value} ${unit}`;
export const getTrafficModifier = (type: trafficType) => `traffic__${type}`;

export const TrafficRenderer = ({ type, max }: Traffic) => {
    const { upload, download } = useRecoilValue(speedTrafficState);
    const trafficValue = type === trafficType.upload ? upload : download;

    return (
        <section className={`traffic ${getTrafficModifier(type)}`}>
            <section className="traffic-info">
                <section className="traffic-info_actual">
                    <span className="traffic-info_actual-type">{trafficTypeLabel[type]}: </span>
                    <span className="traffic-info_actual-value">
                        {getTrafficValue(trafficValue)}
                    </span>
                </section>
                <section className="traffic-info_max-speed">{getTrafficValue(max)}</section>
            </section>
            <TrafficGraph max={max} current={trafficValue} isUpload={type === trafficType.upload} />
        </section>
    );
};
