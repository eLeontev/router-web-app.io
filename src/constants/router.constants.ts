import { DashboardPage } from '../pages/dashboard/dashboard';
import { IsNotImplemented } from '../pages/is-not-implemented';

import { ComponentsToRender } from '../models/router.model';

export const rootPath = '/';
export const dashboardPath = '/dashboard';
export const rootControlPanelPath = '/controlpanel';

export const componentsToRender: ComponentsToRender = {
    default: IsNotImplemented,
    [dashboardPath]: DashboardPage,
};
