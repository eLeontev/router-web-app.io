import React from 'react';
import './header.scss';

import { SearchBar } from '../../common/search-bar';

export const Header = () => (
    <header>
        <h1>
            Keenetic <span>Router</span>
        </h1>
        <SearchBar />
    </header>
);
