import React from 'react';

import { Button } from '../common/button';
import { Input } from '../common/input';
import { Message } from '../common/message';
import { Translate } from '../dashboard/nvagation-bar/common-actions/translate';

import { LoginLabels } from '../../services/i18n.login.service';

import { loginActionTypes } from '../../constants/login.constants';

import { LoginState } from '../../models/login.model';

export type LoginFormProps = {
    state: LoginState;
    i18nLabels: LoginLabels;
    dispatch: React.Dispatch<any>;
};

const { cleanup, cleanuperror, setdefault, validate } = loginActionTypes;

const loginInputName = 'login';
const passwordInputName = 'password';

export const LoginForm = React.memo(
    ({ i18nLabels, dispatch, state: { login, password } }: LoginFormProps) => (
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
                    onChange={(value: string) => dispatch({ type: loginActionTypes.login, value })}
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
                <Translate classModifier="dropdown-as-link__inline" />
            </section>
        </section>
    )
);
