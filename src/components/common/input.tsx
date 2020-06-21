import React from 'react';

export const Input = React.memo(
    ({ value, onChange, name, type = 'text' }: any) => (
        <input
            name={name}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        ></input>
    )
);
