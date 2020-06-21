export type LoginValues = {
    loginValue: string;
    passwordValue: string;
};

export type SetLoader = (isLoading: boolean) => void;
export type SetErrorMessage = (errorMessage: string) => void;
export type Login = (loginValues: LoginValues) => void;

export type UseLoginReturnedValues = {
    isLoading: boolean;
    errorMessage: string;
    hideErrorMessage: SetErrorMessage;
    login: Login;
};
