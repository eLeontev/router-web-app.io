import React from 'react';
import './dashboard.scss';

import { Header } from '../../components/dashboard/header/header';
import { ContextLoader } from '../../components/common/loader';
import { NavigationBar } from '../../components/dashboard/nvagation-bar/navigation-bar';
import { Cards as CardsComponent } from '../../components/dashboard/cards/cards';
import { cardLoaderInstance } from '../../services/card-loader.service';
import { Modal } from '../../components/common/modal';
import { useHistory } from 'react-router-dom';
import { DashboardProps, Cards } from '../../models/dashboard.model';

export const DashboardPage = ({ cardLoader = cardLoaderInstance }: DashboardProps) => {
    const history = useHistory<Cards>();
    const { leftCards, rightCards } = cardLoader.useLoadCards(history);

    return (
        <>
            <Modal />
            <ContextLoader />
            <Header />
            <main>
                <NavigationBar />
                <section className={`content`}>
                    <CardsComponent leftCards={leftCards} rightCards={rightCards} />
                </section>
            </main>
        </>
    );
};
