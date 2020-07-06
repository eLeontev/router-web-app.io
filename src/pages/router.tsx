import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { LoginPage } from './login/login';
import { DashboardPage } from './dashboard/dashboard';
import { dashboardPath } from '../constants/router.constants';
import { WithLoaderContext } from '../context/loader.context';
import { WithModalContext } from '../context/modal.context';

const { NODE_ENV, PUBLIC_URL } = process.env;
const basename = NODE_ENV === 'development' ? '/' : PUBLIC_URL;

export const AppRouter = () => (
    <Router basename={basename}>
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
