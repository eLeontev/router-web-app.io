import React from 'react';
import './dashboard.scss';

import { Header } from '../../components/dashboard/header/header';
import { Loader } from '../../components/common/loader';
import { NavigationBar } from '../../components/dashboard/nvagation-bar/navigation-bar';
import { Boards } from '../../components/dashboard/boards/boards';

export const DashboardPage = () => (
    <>
        <Loader isLoading={false} />
        <Header />
        <section className="content">
            <NavigationBar isCollapsed={true} />
            <Boards boards={{ left: [1, 2, 3], right: [1, 2, 3] }} />
        </section>
    </>
);
