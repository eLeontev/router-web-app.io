import React from 'react';
import { useHistory } from 'react-router-dom';
import './dashboard.scss';

import { Cards as CardsComponent } from '../../components/dashboard/cards/cards';

import { cardLoaderInstance } from '../../services/card-loader.service';

import { Cards } from '../../models/dashboard.model';

export const DashboardPage = () => {
    const history = useHistory<Cards>();
    const { leftCards, rightCards } = cardLoaderInstance.useLoadCards(history);

    return <CardsComponent leftCards={leftCards} rightCards={rightCards} />;
};

export default DashboardPage;
