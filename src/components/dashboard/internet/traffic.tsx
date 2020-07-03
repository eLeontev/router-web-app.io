import React from 'react';
import './traffic.scss';

import { Traffic, TrafficValue } from '../../../models/dashboard.model';
import { trafficType, trafficTypeLabel } from '../../../constants/cards.constants';

export type TrafficGraphProps = {
    max: TrafficValue;
    current: TrafficValue;
};
export const TrafficGraph = ({}: TrafficGraphProps) => (
    <section className="traffic-graph"></section>
);

export const getTrafficValue = ({ unit, value }: TrafficValue) => `${value} ${unit}`;
export const getTrafficModifier = (type: trafficType) => `traffic__${type}`;

export const TrafficRenderer = ({ type, max, current }: Traffic) => {
    return (
        <section className={`traffic ${getTrafficModifier(type)}`}>
            <section className="traffic-info">
                <section className="traffic-info_actual">
                    <span className="traffic-info_actual-type">{trafficTypeLabel[type]}: </span>
                    <span className="traffic-info_actual-value">{getTrafficValue(current)}</span>
                </section>
                <section className="traffic-info_max-speed">{getTrafficValue(max)}</section>
            </section>
            <TrafficGraph max={max} current={current} />
        </section>
    );
};
