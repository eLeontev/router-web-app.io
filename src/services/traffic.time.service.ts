import moment from 'moment';

import { countOfDisplayedNodes, trafficTimeFormat } from '../constants/cards.constants';

const msModifier = 1000;

export const getCurrentTiming = (): string => moment().format(trafficTimeFormat);
export const getStartTiming = (): string =>
    moment(moment().diff(countOfDisplayedNodes * msModifier)).format(trafficTimeFormat);
