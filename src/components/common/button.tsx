import React from 'react';
import './button.scss';

export type ButtonProps = {
    className?: string;
    buttonName: string;
    buttonHandler: () => void;
};
export const Button = React.memo(
    ({ className, buttonName, buttonHandler }: ButtonProps) => (
        <button className={className} onClick={buttonHandler}>
            {buttonName}
        </button>
    )
);
