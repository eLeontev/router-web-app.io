import React from 'react';

export type InputProps = {
    value: string | number;
    name: string;
    onChange: (value: string) => void;
    type?: string;
    placeholder?: string;
};

export const searchPlaceholder = 'Search for settings';

export const Input = React.memo(
    ({
        value,
        onChange,
        name,
        type = 'text',
        placeholder = '',
    }: InputProps) => (
        <input
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        ></input>
    )
);
