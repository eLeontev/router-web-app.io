import React, { useState } from 'react';
import { ModalInfoContext, ModalInfo } from '../models/modals.model';

export const ModalContext = React.createContext<ModalInfoContext>(
    (null as unknown) as ModalInfoContext
);

export const WithModalContext = ({ children }: { children: any }) => {
    const [modalInfo, setModal] = useState(null as ModalInfo);

    return (
        <ModalContext.Provider value={{ modalInfo, setModal }}>
            {children}
        </ModalContext.Provider>
    );
};
