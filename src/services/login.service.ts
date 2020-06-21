import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
    UseLoginReturnedValues,
    LoginValues,
    SetLoader,
    SetErrorMessage,
} from '../models/login.model';
import {
    noErrorMessage,
    defaultLoginValues,
    invalidCredentionalsMessage,
    minCountOfLoginSymbols,
    minCountOfPasswordSymbols,
    defaultCredentials,
} from '../constants/login.constants';
import { dashboardPath } from '../constants/router.constants';

export class LoginService {
    private minCountOfLoginSymbols = minCountOfLoginSymbols;
    private minCountOfPasswordSymbols = minCountOfPasswordSymbols;

    public useLogin(isDirty: boolean): UseLoginReturnedValues {
        const [errorMessage, setErrorMessage] = useState(noErrorMessage);
        const [loginValues, login] = useState(defaultLoginValues);
        const [isLoading, setLoader] = useState(false);
        const history = useHistory();

        useEffect(() => {
            if (isDirty) {
                if (this.validateValues(loginValues)) {
                    this.login(
                        loginValues,
                        history,
                        setLoader,
                        setErrorMessage
                    );
                    setErrorMessage(noErrorMessage);
                    setLoader(true);
                    return;
                }

                setErrorMessage(invalidCredentionalsMessage);
            }
        }, [isDirty, loginValues, history]);

        return {
            isLoading,
            errorMessage,
            login,
            hideErrorMessage: () => setErrorMessage(noErrorMessage),
        };
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

    private login(
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
