import {
    initialCredentials,
    defaultCredentials,
    minCountOfLoginSymbols,
    minCountOfPasswordSymbols,
    invalidCredentionalsMessage,
    ActionHandlers,
    loginActionTypes,
} from '../constants/login.constants';
import { LoginReducer, LoginState, Action } from '../models/login.model';

const {
    cleanup,
    cleanuperror,
    cleanuplogin,
    login,
    password,
    setdefault,
    validate,
} = loginActionTypes;

export const actionHandlers: ActionHandlers = {
    [login]: (login: string) => ({ login }),
    [password]: (password: string) => ({ password }),
    [cleanup]: () => ({
        ...initialCredentials,
        errorMessage: '',
    }),
    [setdefault]: () => ({
        ...defaultCredentials,
        errorMessage: '',
    }),
    [cleanuperror]: () => ({ errorMessage: '' }),
    [cleanuplogin]: (errorMessage: string) => ({
        shouldLogin: '',
        errorMessage,
    }),
    [validate]: (v: null, { login, password }: LoginState) => {
        if (
            login.trim().length > minCountOfLoginSymbols &&
            password.trim().length > minCountOfPasswordSymbols
        ) {
            return {
                shouldLogin: true,
                errorMessage: '',
            };
        }

        return {
            shouldLogin: false,
            errorMessage: invalidCredentionalsMessage,
        };
    },
};

export const loginReducer: LoginReducer = (
    state: LoginState,
    { type, value }: Action
): LoginState => {
    const actionHandler = actionHandlers[type];
    if (actionHandler) {
        return {
            ...state,
            ...actionHandler(value, state),
        };
    }

    return state;
};
