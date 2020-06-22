import React, { useState } from 'react';
import './login.scss';

import { Input } from '../../components/common/input';
import { Button } from '../../components/common/button';

import { loginInstance } from '../../services/login.service';
import { Message } from '../../components/common/message';
import { Loader } from '../../components/common/loader';

const loginInputName = 'login';
const passwordInputName = 'password';

export const LoginPage = ({ loginService = loginInstance }: any) => {
    const [loginValue, onLoginChange] = useState('');
    const [passwordValue, onPasswordChange] = useState('');

    const {
        isLoading,
        errorMessage,
        hideErrorMessage,
        login,
    } = loginService.useLogin();

    return (
        <>
            <Loader isLoading={isLoading} />
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
