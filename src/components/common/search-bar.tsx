import React from 'react';

import { Input } from './input';
import { commonLabels } from '../../models/common.model';

export const SearchBar = () => (
    <label className="search-content">
        <Input
            value=""
            name="search"
            type="search"
            className="search-input"
            placeholder={commonLabels.searchPlaceholderLabel}
            onChange={(value: string) => console.log(value)}
        />
    </label>
);
