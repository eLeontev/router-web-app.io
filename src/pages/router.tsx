import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { LoginPage } from './login/login';
import { render } from './render-components';

import { dashboardPath, rootControlPanelPath, rootPath } from '../constants/router.constants';

const { NODE_ENV, PUBLIC_URL } = process.env;
const basename = NODE_ENV === 'development' ? '/' : PUBLIC_URL;

export const AppRouter = () => (
    <RecoilRoot>
        <Router basename={basename}>
            <Switch>
                <Route exact path={rootPath}>
                    <LoginPage />
                </Route>

                <Route
                    path={[
                        dashboardPath,
                        `${rootControlPanelPath}/:path`,
                        `${rootControlPanelPath}/:path/:id`,
                    ]}
                    render={render}
                ></Route>
            </Switch>
        </Router>
    </RecoilRoot>
);
