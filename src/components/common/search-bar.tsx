import React from 'react';
import { Input, searchPlaceholder } from './input';

export const SearchBar = () => (
    <Input
        value=""
        name="search"
        type="search"
        placeholder={searchPlaceholder}
        onChange={(value: string) => console.log(value)}
    />
);
