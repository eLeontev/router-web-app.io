import React, { useState } from 'react';
import './login.scss';

import { Input } from '../components/Input';
import { Button } from '../components/button';

import { loginInstance } from '../services/login.service';
import { Message } from '../components/message';
import { Loader } from '../components/loader';

const loginInputName = 'login';
const passwordInputName = 'password';

export const LoginPage = ({ loginService = loginInstance }: any) => {
    const [loginValue, onLoginChange] = useState('');
    const [passwordValue, onPasswordChange] = useState('');
    const [isDirty, setDirty] = useState(false);

    const {
        isLoading,
        errorMessage,
        hideErrorMessage,
        login,
    } = loginService.useLogin(isDirty);

    return (
        <section className="login">
            <h2 className="_aligned">Login page</h2>
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
                    buttonHandler={() => {
                        setDirty(true);
                        login({ loginValue, passwordValue });
                    }}
                />
                <Message
                    type="error"
                    message={errorMessage}
                    onClose={hideErrorMessage}
                />
            </section>
            <Loader isLoading={isLoading} />
        </section>
    );
};
