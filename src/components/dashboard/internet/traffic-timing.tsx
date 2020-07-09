import React from 'react';
import { useRecoilValue } from 'recoil';
import './traffic-timing.scss';

import { speedTrafficState } from '../../../recoil-state/internet.state';
import { getCurrentTiming, getStartTiming } from '../../../services/traffic.time.service';

export const TrafficTiming = React.memo(() => {
    useRecoilValue(speedTrafficState);

    return (
        <section className="timing">
            <span className="timing_start">{getStartTiming()}</span>
            <span className="timing_current">{getCurrentTiming()}</span>
        </section>
    );
});
