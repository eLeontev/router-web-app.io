import { LoginValues, LoginState } from '../models/login.model';

export const initialCredentials: LoginValues = {
    login: '',
    password: '',
};

export const defaultCredentials: LoginValues = {
    login: 'admin',
    password: 'root',
};

export const initialState: LoginState = {
    ...initialCredentials,
    shouldLogin: false,
    errorMessage: '',
};

export const minCountOfLoginSymbols = 3;
export const minCountOfPasswordSymbols = 3;

export enum loginActionTypes {
    login = 'login',
    password = 'password',
    cleanup = 'cleanup',
    setdefault = 'setdefault',
    cleanuperror = 'cleanuperror',
    cleanuplogin = 'cleanuplogin',
    validate = 'validate',
}
