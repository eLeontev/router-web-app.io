import React, { useEffect, useState } from 'react';
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

const getSuccessStatus = (isSuccess: boolean) => (isSuccess ? `success` : '');

export const ButtonWithPostHandler = (props: ButtonProps) => {
    const { className = '' } = props;
    const [isSuccess, setPostHandlerResult] = useState(false);

    useEffect(() => {
        if (isSuccess) {
            setTimeout(() => {
                setPostHandlerResult(false);
            }, 2000);
        }
    }, [isSuccess]);

    return (
        <Button
            {...props}
            className={`${className} ${getSuccessStatus(isSuccess)}`}
            buttonHandler={() =>
                isSuccess
                    ? null
                    : Promise.resolve(props.buttonHandler()).then(() =>
                          setPostHandlerResult(true)
                      )
            }
        />
    );
};
