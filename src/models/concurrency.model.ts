import { Cards } from './dashboard.model';
import { LoginValues } from './login.model';

export type DashboardRequest = {
    read: () => Cards | undefined;
};
export type DashboardLoaderProps = {
    dashboardRequest: DashboardRequest;
};
export type ErrorHandler = (errorMessage: string) => any;
export type ConcurrencyLoginHandlerProps = {
    loginValues: LoginValues;
    errorHandler: ErrorHandler;
    getDashboardRequest?(
        loginValues: LoginValues,
        errorHandler: ErrorHandler
    ): Promise<Cards | undefined>;
};
