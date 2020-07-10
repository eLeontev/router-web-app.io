import React, { useReducer } from 'react';
import './login.scss';

import { WithLoaderContext } from '../../context/loader.context';
import { LoginForm } from '../../components/login/login-form';

import { loginReducer } from '../../reducers/login.reducer';
import { ConcurrencyLoginHandler } from '../../components/concurrency/concurrency-login-handler';
import { useGetLoginPageLabels } from '../../services/i18n.login.service';

import { initialState, loginActionTypes } from '../../constants/login.constants';

import { LoginState, LoginReducer } from '../../models/login.model';

const { cleanuplogin } = loginActionTypes;

export const LoginPage = () => {
    const [state, dispatch] = useReducer<LoginReducer, LoginState>(
        loginReducer,
        initialState,
        () => initialState
    );
    const { errorMessage, shouldLogin, password, login } = state;

    const i18nLabels = useGetLoginPageLabels(errorMessage);

    return (
        <WithLoaderContext>
            <section id="root-portal-modal"></section>
            {shouldLogin ? (
                <ConcurrencyLoginHandler
                    loginValues={{ login, password }}
                    errorHandler={(errorMessage: string) =>
                        dispatch({ type: cleanuplogin, value: errorMessage })
                    }
                />
            ) : null}
            <LoginForm dispatch={dispatch} i18nLabels={i18nLabels} state={state} />
        </WithLoaderContext>
    );
};
