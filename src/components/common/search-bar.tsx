import React from 'react';

import { Input, searchPlaceholder } from './input';

export const SearchBar = () => (
    <label className="search-content">
        <Input
            value=""
            name="search"
            type="search"
            className="search-input"
            placeholder={searchPlaceholder}
            onChange={(value: string) => console.log(value)}
        />
    </label>
);
