import React, {useEffect, useRef} from 'react';
import './traffic-graph.scss';

import { renderGraph } from '../../../utils/d3-graph';

import { TrafficValue } from '../../../models/dashboard.model';
import {getDataset, getLimitedCountOfNodes} from '../../../services/traffic-graph.service';

export type TrafficGraphProps = {
    max: TrafficValue;
    current: TrafficValue;
    isUpload: boolean;
};

const getModifier = (isUpload: boolean) => (isUpload ? 'upload' : 'download');

export const TrafficGraph = ({ isUpload, current, max }: TrafficGraphProps) => {
    const maxRef = useRef(max);
    const nodesRef = useRef<Array<TrafficValue>>([]);

    useEffect(() => {
        nodesRef.current = getLimitedCountOfNodes(nodesRef.current, current);
        renderGraph('traffic-graph', getModifier(isUpload), getDataset(nodesRef.current, maxRef.current));
    }, [current, isUpload]);

    return <section className={`traffic-graph traffic-graph__${getModifier(isUpload)}`}></section>;
};
