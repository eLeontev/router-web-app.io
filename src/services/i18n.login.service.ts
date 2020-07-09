import { useGetTranslatedLabels } from './i18n.service';
import { loginLabels } from '../models/login.model';

export type LoginLabels = {
    [key in loginLabels]: string;
};
export const useGetLoginPageLabels = (errorMessage: string): LoginLabels => {
    const [
        loginTitleLabel,
        loginButtonLabel,
        resetLabel,
        setDefaultLabel,
        invalidCredentialsMessageLabel,
    ] = useGetTranslatedLabels([
        loginLabels.loginTitleLabel,
        loginLabels.loginButtonLabel,
        loginLabels.resetLabel,
        loginLabels.setDefaultLabel,
        loginLabels.invalidCredentialsMessageLabel,
    ]);

    return {
        loginTitleLabel,
        loginButtonLabel,
        resetLabel,
        setDefaultLabel,
        invalidCredentialsMessageLabel:
            errorMessage === loginLabels.invalidCredentialsMessageLabel
                ? invalidCredentialsMessageLabel
                : errorMessage,
    };
};
