import React from 'react';
import ReactDOM from 'react-dom';

import { AppRouter } from './pages/router';

import './index.scss';

import * as serviceWorker from './serviceWorker';

ReactDOM.unstable_createRoot(document.getElementById('root') as Element).render(
    <React.StrictMode>
        <AppRouter />
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
