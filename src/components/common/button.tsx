import React from 'react';

export const Button = React.memo(
    ({ className, buttonName, buttonHandler }: any) => (
        <button className={className} onClick={buttonHandler}>
            {buttonName}
        </button>
    )
);
