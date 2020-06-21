import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { LoginPage } from './pages/login/login';
import { DashboardPage } from './pages/dashboard';
import { dashboardPath } from './constants/router.constants';

export const AppRouter = () => (
    <Router>
        <Switch>
            <Route path={dashboardPath}>
                <DashboardPage />
            </Route>
            <Route path="/">
                <LoginPage />
            </Route>
        </Switch>
    </Router>
);
