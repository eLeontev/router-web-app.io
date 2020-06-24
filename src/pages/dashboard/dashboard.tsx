import React from 'react';
import './dashboard.scss';

import { Header } from '../../components/dashboard/header/header';
import { Loader } from '../../components/common/loader';
import { NavigationBar } from '../../components/dashboard/nvagation-bar/navigation-bar';
import { Cards } from '../../components/dashboard/cards/cards';
import { cardLoaderInstance } from '../../services/card-loader.service';

export const DashboardPage = ({ cardLoader = cardLoaderInstance }: any) => {
    const { isLoading, leftCards, rightCards } = cardLoader.useLoadCards();
    return (
        <>
            <Loader isLoading={isLoading} />
            <Header />
            <section className="content">
                <NavigationBar isCollapsed={true} />
                <Cards leftCards={leftCards} rightCards={rightCards} />
            </section>
        </>
    );
};