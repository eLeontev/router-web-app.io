import { useEffect, useState } from 'react';
import { defaultCards } from '../constants/cards.constants';
import { Cards, CardsResponse } from '../models/dashboard.model';
import { cardsMocks } from '../mock/cards.mock';

export type SetCards = (cards: Cards) => void;

export class CardLoaderService {
    public useLoadCards(preloadedCards: Cards): CardsResponse {
        const [isLoading, setLoader] = useState(false);
        const [{ leftCards, rightCards }, setCards] = useState(defaultCards);

        useEffect(() => {
            if (preloadedCards) {
                return setCards(preloadedCards);
            }

            setLoader(true);
            this.fetchCards(setCards).finally(() => setLoader(false));
        }, [preloadedCards]);

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
