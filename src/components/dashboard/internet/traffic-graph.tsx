import React, { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import './traffic-graph.scss';

import {
    callRenderGraph,
    getLimitedCountOfNodes,
    getModifier,
} from '../../../services/traffic-graph.service';
import { toggleNavBarState } from '../../../recoil-state/navigation/toggle-nav-bar.atom';

import { TrafficValue, TrafficValues } from '../../../models/dashboard.model';
import { TrafficGraphProps } from '../../../models/internet.model';

export const TrafficGraph = ({ isUpload, current, max }: TrafficGraphProps) => {
    const maxRef = useRef<TrafficValue>(max);
    const nodesRef = useRef<TrafficValues>([]);

    useEffect(() => {
        nodesRef.current = getLimitedCountOfNodes(nodesRef.current, current);
        callRenderGraph(nodesRef, maxRef, isUpload, false);
    }, [current, isUpload]);

    const isNavBarExpanded = useRecoilValue(toggleNavBarState);
    useEffect(() => {
        const timerId = callRenderGraph(nodesRef, maxRef, isUpload, true) as NodeJS.Timeout;
        return () => clearTimeout(timerId);
    }, [isNavBarExpanded, isUpload]);

    return <section className={`traffic-graph traffic-graph__${getModifier(isUpload)}`}></section>;
};
