import React, { useReducer } from 'react';
import './login.scss';

import { Input } from '../../components/common/input';
import { Button } from '../../components/common/button';

import { Message } from '../../components/common/message';
import { initialState, loginActionTypes } from '../../constants/login.constants';
import { ConcurrencyLoginHandler } from '../../components/concurrency/concurrency-login-handler';
import { LoginState, LoginReducer } from '../../models/login.model';
import { loginReducer } from '../../reducers/login.reducer';

const { cleanup, cleanuperror, cleanuplogin, setdefault, validate } = loginActionTypes;

const loginInputName = 'login';
const passwordInputName = 'password';

export const LoginPage = () => {
    const [{ login, password, shouldLogin, errorMessage }, dispatch] = useReducer<
        LoginReducer,
        LoginState
    >(loginReducer, initialState, () => initialState);

    return (
        <>
            <section id="root-portal-modal"></section>
            {shouldLogin ? (
                <ConcurrencyLoginHandler
                    loginValues={{ login, password }}
                    errorHandler={(errorMessage: string): undefined => {
                        dispatch({ type: cleanuplogin, value: errorMessage });
                        return;
                    }}
                />
            ) : null}
            <section className="login">
                <h2 className="_aligned">Login page</h2>
                <Button
                    className="hint-button hint-button__left"
                    buttonName="cleanup"
                    buttonHandler={() => dispatch({ type: cleanup })}
                />
                <Button
                    className="hint-button  hint-button__right"
                    buttonName="set default"
                    buttonHandler={() => dispatch({ type: setdefault })}
                />
                <section className="login-form">
                    <Input
                        name={loginInputName}
                        value={login}
                        onChange={(value: string) =>
                            dispatch({ type: loginActionTypes.login, value })
                        }
                    />
                    <Input
                        name={passwordInputName}
                        value={password}
                        onChange={(value: string) =>
                            dispatch({ type: loginActionTypes.password, value })
                        }
                        type="password"
                    />
                    <Button buttonName="Login" buttonHandler={() => dispatch({ type: validate })} />
                    <Message
                        type="error"
                        message={errorMessage}
                        onClose={() => dispatch({ type: cleanuperror })}
                    />
                </section>
            </section>
        </>
    );
};
