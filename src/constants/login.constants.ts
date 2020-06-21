import { LoginValues } from '../models/login.model';

export const noErrorMessage = '';
export const invalidCredentionalsMessage = 'The credentials are invalid';

export const defaultLoginValues: LoginValues = {
    loginValue: '',
    passwordValue: '',
};

export const defaultCredentials: LoginValues = {
    loginValue: 'admin',
    passwordValue: 'root',
};

export const minCountOfLoginSymbols = 3;
export const minCountOfPasswordSymbols = 3;
