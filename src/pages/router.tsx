import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { LoginPage } from './login/login';
import { DashboardPage } from './dashboard/dashboard';
import { dashboardPath } from '../constants/router.constants';
import { WithLoaderContext } from '../context/loader.context';
import { WithModalContext } from '../context/modal.context';

export const AppRouter = () => (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path={dashboardPath}>
                <WithLoaderContext>
                    <WithModalContext>
                        <DashboardPage />
                    </WithModalContext>
                </WithLoaderContext>
            </Route>
            <Route path="/">
                <WithLoaderContext>
                    <LoginPage />
                </WithLoaderContext>
            </Route>
        </Switch>
    </Router>
);
