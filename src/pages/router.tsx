import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { LoginPage } from './login/login';
import { DashboardPage } from './dashboard/dashboard';

import { dashboardPath, rootControlPanelPath, rootPath } from '../constants/router.constants';
import { ContentWrapper } from './content-wrapper/content-wrapper';

const { NODE_ENV, PUBLIC_URL } = process.env;
const basename = NODE_ENV === 'development' ? '/' : PUBLIC_URL;

export const AppRouter = () => (
    <RecoilRoot>
        <Router basename={basename}>
            <Switch>
                <Route exact path={rootPath}>
                    <LoginPage />
                </Route>

                <Route path={dashboardPath}>
                    <ContentWrapper>
                        <DashboardPage />
                    </ContentWrapper>
                </Route>

                <Router basename={rootControlPanelPath}>
                    <ContentWrapper>
                        <Switch>
                            <Route path={'/wired'}>
                                <h1>wired</h1>
                            </Route>
                            <Route path={'/wificlient'}>
                                <h1>wificlient</h1>
                            </Route>
                        </Switch>
                    </ContentWrapper>
                </Router>
            </Switch>
        </Router>
    </RecoilRoot>
);
//
// <Router path={rootControlPanelPath}>
//     <WithLoaderContext>
//         <WithModalContext>
//             <ContentWrapper>
//                 <Router basename={'/'}>
//                     <Switch>
//                         <Route path={'/wired'}>
//                             <h1>wired</h1>
//                         </Route>
//                         <Route path={'wificlient'}>
//                             <h1>wificlient</h1>
//                         </Route>
//                     </Switch>
//                 </Router>
//             </ContentWrapper>
//         </WithModalContext>
//     </WithLoaderContext>
// </Router>
