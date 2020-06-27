import React, { useState } from 'react';

export const LoaderContext = React.createContext(null as any);

export const WithLoaderContext = ({ children }: { children: any }) => {
    const [isLoading, setLoader] = useState(false);

    return (
        <LoaderContext.Provider value={{ isLoading, setLoader }}>
            {children}
        </LoaderContext.Provider>
    );
};
