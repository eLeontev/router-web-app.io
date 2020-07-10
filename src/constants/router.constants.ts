import { lazy } from 'react';

import { ComponentsToRender } from '../models/router.model';

import { navActionLinks } from './nav.constants';

export const rootPath = '/';
export const dashboardPath = '/dashboard';
export const rootControlPanelPath = '/controlpanel';

export const componentsToRender: ComponentsToRender = {
    default: lazy(() => import('../pages/is-not-implemented')),
    [dashboardPath]: lazy(() => import('../pages/dashboard/dashboard')),
    [navActionLinks.deviceList]: lazy(() => import('../pages/devices-list/devices-list')),
};
