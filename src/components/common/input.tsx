import React from 'react';

export const searchPlaceholder = 'Search for settings';
export const Input = React.memo(
    ({ value, onChange, name, type = 'text', placeholder = '' }: any) => (
        <input
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        ></input>
    )
);
