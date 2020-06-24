import { useState, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import {
    UseLoginReturnedValues,
    LoginValues,
    SetLoader,
    SetErrorMessage,
} from '../models/login.model';
import {
    noErrorMessage,
    invalidCredentionalsMessage,
    minCountOfLoginSymbols,
    minCountOfPasswordSymbols,
    defaultCredentials,
} from '../constants/login.constants';
import { dashboardPath } from '../constants/router.constants';
import { LoaderContext } from '../context/loader.context';

export class LoginService {
    private minCountOfLoginSymbols = minCountOfLoginSymbols;
    private minCountOfPasswordSymbols = minCountOfPasswordSymbols;

    public useLogin(): UseLoginReturnedValues {
        const [errorMessage, setErrorMessage] = useState(noErrorMessage);
        const { setLoader } = useContext(LoaderContext);

        const history = useHistory();

        const login = useCallback(
            (loginValues: LoginValues) =>
                this.login(setLoader, setErrorMessage, history, loginValues),
            [history, setLoader]
        );

        return {
            errorMessage,
            login,
            hideErrorMessage: () => setErrorMessage(noErrorMessage),
        };
    }

    private login(
        setLoader: SetLoader,
        setErrorMessage: SetErrorMessage,
        history: any,
        loginValues: LoginValues
    ): void {
        if (this.validateValues(loginValues)) {
            this.sendReguest(loginValues, history, setLoader, setErrorMessage);
            setErrorMessage(noErrorMessage);
            setLoader(true);
            return;
        }

        setErrorMessage(invalidCredentionalsMessage);
    }

    private validateValues({
        loginValue,
        passwordValue,
    }: LoginValues): boolean {
        return (
            loginValue.trim().length > this.minCountOfLoginSymbols &&
            passwordValue.trim().length > this.minCountOfPasswordSymbols
        );
    }

    private sendReguest(
        loginValues: LoginValues,
        history: any,
        setLoader: SetLoader,
        setErrorMessage: SetErrorMessage
    ): void {
        new Promise((res, rej) =>
            setTimeout(() => {
                this.handleLoginSuccess(loginValues, history, setLoader, rej);
            }, 1000)
        ).catch(this.handleLoginError(setLoader, setErrorMessage));
    }

    private handleLoginSuccess(
        { loginValue, passwordValue }: LoginValues,
        history: any,
        setLoader: SetLoader,
        reject: (errorMessage: string) => void
    ) {
        if (
            loginValue === defaultCredentials.loginValue &&
            passwordValue === defaultCredentials.passwordValue
        ) {
            setLoader(false);
            history.push(dashboardPath);
        } else {
            reject(invalidCredentionalsMessage);
        }
    }

    private handleLoginError = (
        setLoader: SetLoader,
        setErrorMessage: SetErrorMessage
    ) => (errorMessage: string) => {
        setLoader(false);
        setErrorMessage(errorMessage);
    };
}

export const loginInstance = new LoginService();
