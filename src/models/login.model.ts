import { loginActionTypes } from '../constants/login.constants';

export type LoginValues = {
    login: string;
    password: string;
};

export type SetLoader = (isLoading: boolean) => void;
export type SetErrorMessage = (errorMessage: string) => void;
export type Login = (loginValues: LoginValues) => void;

export type UseLoginReturnedValues = {
    errorMessage: string;
    hideErrorMessage: SetErrorMessage;
    login: Login;
};

export type LoginState = LoginValues & {
    shouldLogin: boolean;
    errorMessage: string;
};

export type Action = {
    type: loginActionTypes;
    value?: string;
};

export type LoginReducer = (state: LoginState, action: Action) => LoginState;
