import { ComponentsToRender } from '../models/router.model';

import { navActionLinks } from './nav.constants';

import { IsNotImplemented } from '../pages/is-not-implemented';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { DevicesList } from '../pages/devices-list/devices-list';

export const rootPath = '/';
export const dashboardPath = '/dashboard';
export const rootControlPanelPath = '/controlpanel';

export const componentsToRender: ComponentsToRender = {
    default: IsNotImplemented,
    [dashboardPath]: DashboardPage,
    [navActionLinks.deviceList]: DevicesList,
};
