import React from 'react';
import './button.scss';

export const Button = React.memo(
    ({ className, buttonName, buttonHandler }: any) => (
        <button className={className} onClick={buttonHandler}>
            {buttonName}
        </button>
    )
);
