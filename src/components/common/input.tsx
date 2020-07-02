import React from 'react';
import './input.scss';

export type InputProps = {
    value: string | number;
    name: string;
    onChange: (value: string) => void;
    type?: string;
    placeholder?: string;
    className?: string;
};

export const searchPlaceholder = 'Search for settings';

export const Input = React.memo(
    ({ value, onChange, name, type = 'text', placeholder = '', className = '' }: InputProps) => (
        <input
            name={name}
            type={type}
            value={value}
            className={className}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        ></input>
    )
);
