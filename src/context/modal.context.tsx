import React, { useState, PropsWithChildren } from 'react';
import { ModalInfoContext, ModalInfo } from '../models/modals.model';

export const ModalContext = React.createContext<ModalInfoContext>(
    (null as unknown) as ModalInfoContext
);

export const WithModalContext = ({ children }: PropsWithChildren<{}>) => {
    const [modalInfo, setModal] = useState(null as ModalInfo);

    return (
        <ModalContext.Provider value={{ modalInfo, setModal }}>{children}</ModalContext.Provider>
    );
};
