import React, { useContext } from 'react';
import './traffic.scss';

import { TrafficGraph } from './traffic-graph';

import { InternetContext } from '../../../context/internet.context';
import { trafficType, trafficTypeLabel } from '../../../constants/cards.constants';

import { Traffic, TrafficValue } from '../../../models/dashboard.model';

export const getTrafficValue = ({ unit, value }: TrafficValue) => `${value} ${unit}`;
export const getTrafficModifier = (type: trafficType) => `traffic__${type}`;

export const TrafficRenderer = ({ type, max }: Traffic) => {
    const { internetState: state } = useContext(InternetContext);
    const currentTrafficValue = type === trafficType.upload ? state.upload : state.download;

    return (
        <section className={`traffic ${getTrafficModifier(type)}`}>
            <section className="traffic-info">
                <section className="traffic-info_actual">
                    <span className="traffic-info_actual-type">{trafficTypeLabel[type]}: </span>
                    <span className="traffic-info_actual-value">
                        {getTrafficValue(currentTrafficValue)}
                    </span>
                </section>
                <section className="traffic-info_max-speed">{getTrafficValue(max)}</section>
            </section>
            <TrafficGraph
                max={max}
                current={currentTrafficValue}
                isUpload={type === trafficType.upload}
            />
        </section>
    );
};
