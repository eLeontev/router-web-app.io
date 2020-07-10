import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { RecoilRoot } from 'recoil';

import { LoginPage } from './login/login';
import { ContentWrapper } from './content-wrapper/content-wrapper';

import {
    componentsToRender,
    dashboardPath,
    rootControlPanelPath,
    rootPath,
} from '../constants/router.constants';

const { NODE_ENV, PUBLIC_URL } = process.env;
const basename = NODE_ENV === 'development' ? '/' : PUBLIC_URL;

export const render = ({ match: { path } }: RouteComponentProps<any>) => {
    const ContentComponent = componentsToRender[path] || componentsToRender.default;

    return (
        <ContentWrapper>
            <ContentComponent />
        </ContentWrapper>
    );
};

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
