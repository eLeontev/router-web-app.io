import React, { useReducer } from 'react';
import './login.scss';

import { Input } from '../../components/common/input';
import { Button } from '../../components/common/button';
import { Message } from '../../components/common/message';

import { loginReducer } from '../../reducers/login.reducer';
import { ConcurrencyLoginHandler } from '../../components/concurrency/concurrency-login-handler';
import { useGetLoginPageLabels } from '../../services/i18n.login.service';

import { initialState, loginActionTypes } from '../../constants/login.constants';

import { LoginState, LoginReducer } from '../../models/login.model';

const { cleanup, cleanuperror, cleanuplogin, setdefault, validate } = loginActionTypes;

const loginInputName = 'login';
const passwordInputName = 'password';

export const LoginPage = () => {
    const [{ login, password, shouldLogin, errorMessage }, dispatch] = useReducer<
        LoginReducer,
        LoginState
    >(loginReducer, initialState, () => initialState);
    const i18nLabels = useGetLoginPageLabels(errorMessage);

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
                <h2 className="_aligned">{i18nLabels.loginTitleLabel}</h2>
                <Button
                    className="hint-button hint-button__left"
                    buttonName={i18nLabels.resetLabel}
                    buttonHandler={() => dispatch({ type: cleanup })}
                />
                <Button
                    className="hint-button  hint-button__right"
                    buttonName={i18nLabels.setDefaultLabel}
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
                    <Button
                        buttonName={i18nLabels.loginButtonLabel}
                        buttonHandler={() => dispatch({ type: validate })}
                    />
                    <Message
                        type="error"
                        message={i18nLabels.invalidCredentialsMessageLabel}
                        onClose={() => dispatch({ type: cleanuperror })}
                    />
                </section>
            </section>
        </>
    );
};
