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

export const ButtonWithPostHandler = (
    props: ButtonProps & { isActive: boolean }
) => {
    const { className = '', isActive } = props;
    const [isSuccess, setPostHandlerResult] = useState(false);

    useEffect(() => {
        let timerId: NodeJS.Timeout;

        if (isSuccess) {
            timerId = setTimeout(() => {
                setPostHandlerResult(false);
            }, 2000);
        }
        return () => timerId && clearTimeout(timerId);
    }, [isSuccess]);

    return (
        <Button
            {...props}
            className={`${className} ${getSuccessStatus(isSuccess)}`}
            buttonHandler={() =>
                isSuccess || !isActive
                    ? null
                    : Promise.resolve(props.buttonHandler()).then(() =>
                          setPostHandlerResult(true)
                      )
            }
        />
    );
};
