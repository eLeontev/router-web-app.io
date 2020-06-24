import React from 'react';
import './loader.scss';

export const Loader = React.memo(
    ({ isLoading, shouldDisplayAlways = false }: any) =>
        isLoading || shouldDisplayAlways ? (
            <section className="loader"></section>
        ) : null
);
