import React from 'react';
import './header.scss';

import { SearchBar } from '../../common/search-bar';

export const Header = () => (
    <header>
        <h1>Keenetic Router</h1>
        <SearchBar />
    </header>
);
