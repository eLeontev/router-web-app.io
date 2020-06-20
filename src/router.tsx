import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { LoginPage } from './pages/login';
import { DashboardPage } from './pages/dashboard';

export const AppRouter = () => (
    <Router>
        <Switch>
            <Route path="/dashboard">
                <DashboardPage />
            </Route>
            <Route path="/">
                <LoginPage />
            </Route>
        </Switch>
    </Router>
);
