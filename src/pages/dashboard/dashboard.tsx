import React from 'react';
import { useHistory } from 'react-router-dom';
import './dashboard.scss';

import { Header } from '../../components/dashboard/header/header';
import { ContextLoader } from '../../components/common/loader';
import { NavigationBar } from '../../components/dashboard/nvagation-bar/navigation-bar';
import { Cards as CardsComponent } from '../../components/dashboard/cards/cards';
import { Modal } from '../../components/common/modal';

import { cardLoaderInstance } from '../../services/card-loader.service';

import { useExpandCollapseHook } from '../../hooks/expand-collpase.hook';
import { useToggleNavBar } from '../../hooks/toggle-nav-bar.recoil.hook';

import { DashboardProps, Cards } from '../../models/dashboard.model';

export const DashboardPage = ({ cardLoader = cardLoaderInstance }: DashboardProps) => {
    const history = useHistory<Cards>();
    const { leftCards, rightCards } = cardLoader.useLoadCards(history);

    const { isNavBarExpanded } = useToggleNavBar();
    const expandCollapseClassName = useExpandCollapseHook(isNavBarExpanded);

    return (
        <>
            <Modal />
            <ContextLoader />
            <Header />
            <main>
                <NavigationBar />
                <section className={`content content__${expandCollapseClassName}`}>
                    <CardsComponent leftCards={leftCards} rightCards={rightCards} />
                </section>
            </main>
        </>
    );
};
