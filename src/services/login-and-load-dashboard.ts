import {
    defaultCredentials,
    invalidCredentionalsMessage,
} from '../constants/login.constants';
import { invalidCardsMessage } from '../constants/cards.constants';

import { cardsMocks } from '../mock/cards.mock';

import { LoginValues } from '../models/login.model';
import { Cards } from '../models/dashboard.model';
import { ErrorHandler } from '../models/concurency.model';

export const login = ({ login, password }: LoginValues): Promise<string> => {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            if (
                login === defaultCredentials.login &&
                password === defaultCredentials.password
            ) {
                resolve('userToken');
            } else {
                reject(invalidCredentionalsMessage);
            }
        }, 1000)
    );
};

export const fetchDashboard = (userToken: string): Promise<Cards> =>
    new Promise((resolve, reject) =>
        setTimeout(() => {
            if (userToken) {
                return resolve(cardsMocks);
            }

            reject(invalidCardsMessage);
        }, 2000)
    );

export const loadDashboard = (
    loginValues: LoginValues,
    errorHandler: ErrorHandler
): Promise<Cards | undefined> =>
    login(loginValues).then(fetchDashboard).catch(errorHandler);
