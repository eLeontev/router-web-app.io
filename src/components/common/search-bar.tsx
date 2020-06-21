import React from 'react';
import { Input, searchPlaceholder } from './input';

export const SearchBar = () => (
    <Input name="search" type="search" placeholder={searchPlaceholder} />
);
