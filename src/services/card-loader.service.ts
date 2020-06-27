import { useEffect, useState } from 'react';
import { History } from 'history';

import { defaultCards } from '../constants/cards.constants';
import { cardsMocks } from '../mock/cards.mock';
import { dashboardPath } from '../constants/router.constants';

import { Cards, CardsResponse } from '../models/dashboard.model';

export type SetCards = (cards: Cards) => void;

export class CardLoaderService {
    public useLoadCards(history: History<Cards>): CardsResponse {
        const [isLoading, setLoader] = useState(false);
        const [{ leftCards, rightCards }, setCards] = useState(defaultCards);

        useEffect(() => {
            const preloadedCards = history.location.state;

            if (preloadedCards) {
                history.replace(dashboardPath, undefined);
                return setCards(preloadedCards);
            }

            setLoader(true);
            this.fetchCards(setCards).finally(() => setLoader(false));
        }, [history]);

        return { isLoading, leftCards, rightCards };
    }

    private async fetchCards(setCards: SetCards): Promise<void> {
        return new Promise((res) => {
            setTimeout(() => {
                setCards(cardsMocks);
                res();
            }, 1000);
        });
    }
}

export const cardLoaderInstance = new CardLoaderService();
