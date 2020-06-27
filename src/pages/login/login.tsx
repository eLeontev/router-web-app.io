import React, { useState, useCallback } from 'react';
import './login.scss';

import { Input } from '../../components/common/input';
import { Button } from '../../components/common/button';

import { loginInstance } from '../../services/login.service';
import { Message } from '../../components/common/message';
import { Loader } from '../../components/common/loader';
import { defaultCredentials } from '../../constants/login.constants';

const loginInputName = 'login';
const passwordInputName = 'password';

export const LoginPage = ({ loginService = loginInstance }: any) => {
    const [loginValue, onLoginChange] = useState('');
    const [passwordValue, onPasswordChange] = useState('');
    const { errorMessage, hideErrorMessage, login } = loginService.useLogin();

    const setDefaultCredentials = useCallback(() => {
        onLoginChange(defaultCredentials.loginValue);
        onPasswordChange(defaultCredentials.passwordValue);
    }, [onLoginChange, onPasswordChange]);

    return (
        <>
            <Loader />
            <section className="login">
                <h2 className="_aligned">Login page</h2>
                <Button
                    className="hint-button"
                    buttonName="set default"
                    buttonHandler={setDefaultCredentials}
                />
                <section className="login-form">
                    <Input
                        name={loginInputName}
                        value={loginValue}
                        onChange={onLoginChange}
                    />
                    <Input
                        name={passwordInputName}
                        value={passwordValue}
                        onChange={onPasswordChange}
                        type="password"
                    />
                    <Button
                        buttonName="Login"
                        buttonHandler={() =>
                            login({ loginValue, passwordValue })
                        }
                    />
                    <Message
                        type="error"
                        message={errorMessage}
                        onClose={hideErrorMessage}
                    />
                </section>
            </section>
        </>
    );
};
