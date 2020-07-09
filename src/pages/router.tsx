import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { LoginPage } from './login/login';
import { DashboardPage } from './dashboard/dashboard';
import { WithLoaderContext } from '../context/loader.context';
import { WithModalContext } from '../context/modal.context';

import { dashboardPath, rootPath } from '../constants/router.constants';

const { NODE_ENV, PUBLIC_URL } = process.env;
const basename = NODE_ENV === 'development' ? '/' : PUBLIC_URL;

export const AppRouter = () => (
    <RecoilRoot>
        <Router basename={basename}>
            <Switch>
                <Route path={dashboardPath}>
                    <WithLoaderContext>
                        <WithModalContext>
                            <DashboardPage />
                        </WithModalContext>
                    </WithLoaderContext>
                </Route>
                <Route path={rootPath}>
                    <WithLoaderContext>
                        <LoginPage />
                    </WithLoaderContext>
                </Route>
            </Switch>
        </Router>
    </RecoilRoot>
);
