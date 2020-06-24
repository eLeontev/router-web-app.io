import React from 'react';
import './dashboard.scss';

import { Header } from '../../components/dashboard/header/header';
import { Loader } from '../../components/common/loader';
import { NavigationBar } from '../../components/dashboard/nvagation-bar/navigation-bar';
import { Cards } from '../../components/dashboard/cards/cards';
import { cardLoaderInstance } from '../../services/card-loader.service';
import { Modal } from '../../components/common/modal';

export const DashboardPage = ({ cardLoader = cardLoaderInstance }: any) => {
    const { leftCards, rightCards } = cardLoader.useLoadCards();
    return (
        <>
            <Modal />
            <Loader />
            <Header />
            <section className="content">
                <NavigationBar isCollapsed={true} />
                <Cards leftCards={leftCards} rightCards={rightCards} />
            </section>
        </>
    );
};
