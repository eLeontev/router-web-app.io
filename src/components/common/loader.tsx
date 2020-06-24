import React, { useContext } from 'react';
import './loader.scss';

import { LoaderContext } from '../../context/loader.context';

export const Loader = React.memo(() => {
    const { isLoading } = useContext(LoaderContext);

    return isLoading ? <section className="loader"></section> : null;
});
