import React, { Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';

import { suspenseFetch } from '../../concurrency/suspence-fetch';
import { SuspenseLoader } from '../common/loader';
import { loadDashboard } from '../../services/login-and-load-dashboard';
import { dashboardPath } from '../../constants/router.constants';

import { Cards } from '../../models/dashboard.model';
import { DashboardLoaderProps, ConcurrencyLoginHandlerProps } from '../../models/concurrency.model';

export const DashboardLoader = ({ dashboardRequest }: DashboardLoaderProps) => {
    const history = useHistory();

    const cards = dashboardRequest.read();

    useEffect(() => {
        history.push({ pathname: dashboardPath, state: cards });
    }, [history, cards]);

    return null;
};

export const ConcurrencyLoginHandler = ({
    loginValues,
    errorHandler,
    getDashboardRequest = loadDashboard,
}: ConcurrencyLoginHandlerProps) => {
    const [dashboardRequest] = useState(
        suspenseFetch<Cards | undefined>(getDashboardRequest(loginValues, errorHandler))
    );

    return (
        <Suspense
            fallback={ReactDOM.createPortal(
                <SuspenseLoader />,
                document.getElementById('root-portal-modal') as HTMLElement
            )}
        >
            <DashboardLoader dashboardRequest={dashboardRequest} />
        </Suspense>
    );
};
