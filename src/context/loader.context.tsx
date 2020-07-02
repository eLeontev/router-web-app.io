import React, { useState, PropsWithChildren } from 'react';

import { LoaderInfoContext } from '../models/login.model';

export const LoaderContext = React.createContext<LoaderInfoContext>(
    (null as unknown) as LoaderInfoContext
);

export const WithLoaderContext = ({ children }: PropsWithChildren<{}>) => {
    const [isLoading, setLoader] = useState(false);

    return (
        <LoaderContext.Provider value={{ isLoading, setLoader }}>{children}</LoaderContext.Provider>
    );
};
