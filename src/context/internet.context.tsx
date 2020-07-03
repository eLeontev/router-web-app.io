import React, { useState, PropsWithChildren } from 'react';
import { TrafficValue } from '../models/dashboard.model';

export type InternetState = {
    download: TrafficValue;
    upload: TrafficValue;
    received: string;
    sent: string;
};

export type InternetContextState = {
    internetState: InternetState;
    updateTraffic: (state: InternetState) => void;
};

export const InternetContext = React.createContext<InternetContextState>(
    (null as unknown) as InternetContextState
);

export const WithInternetContext = ({ children }: PropsWithChildren<{}>) => {
    const [internetState, updateTraffic] = useState({
        download: {
            value: 0,
            unit: '',
        },
        upload: {
            value: 0,
            unit: '',
        },
        received: '',
        sent: '',
    });

    return (
        <InternetContext.Provider value={{ internetState, updateTraffic }}>
            {children}
        </InternetContext.Provider>
    );
};
