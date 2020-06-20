import React from 'react';
import './loader.scss';

export const Loader = React.memo(({ isLoading }: any) =>
    isLoading ? <section className="loader"></section> : null
);
