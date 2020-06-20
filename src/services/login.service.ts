import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const noErrorMessage = '';
const invalidCredentionalsMessage = 'The credentials are invalid';
type LoginValues = {
    loginValue: string;
    passwordValue: string;
};

type SetLoader = (isLoading: boolean) => void;
type SetErrorMessage = (errorMessage: string) => void;
type Login = (loginValues: LoginValues) => void;

type UseLoginReturnedValues = {
    isLoading: boolean;
    errorMessage: string;
    hideErrorMessage: SetErrorMessage;
    login: Login;
};

export const defaultLoginValues: LoginValues = {
    loginValue: '',
    passwordValue: '',
};

export class LoginService {
    private minCountOfLoginSymbols = 3;
    private minCountOfPasswordSymbols = 7;

    public useLogin(isDirty: boolean): UseLoginReturnedValues {
        const [errorMessage, setErrorMessage] = useState(noErrorMessage);
        const [loginValues, login] = useState(defaultLoginValues);
        const [isLoading, setLoader] = useState(false);
        const history = useHistory();

        useEffect(() => {
            if (isDirty) {
                if (this.validateValues(loginValues) || true) {
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
        }, [loginValues, isDirty, history]);

        return {
            isLoading,
            errorMessage,
            login,
            hideErrorMessage: () => setErrorMessage(''),
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

    private async login(
        loginValues: LoginValues,
        history: any,
        setLoader: SetLoader,
        setErrorMessage: SetErrorMessage
    ): Promise<void> {
        await new Promise((res) =>
            setTimeout(() => {
                setLoader(false);
                history.push('/dashboard');
            }, 2000)
        ).catch(({ errorMessage }) => {
            setLoader(false);
            setErrorMessage(errorMessage);
        });
    }
}

export const loginInstance = new LoginService();
