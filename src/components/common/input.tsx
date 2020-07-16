import React, { useCallback, useState } from 'react';
import './input.scss';

import { useGetTranslatedLabel } from '../../services/i18n.service';
import { commonLabels } from '../../models/common.model';

export type InputProps = {
    value: string | number;
    name: string;
    onChange: (value: string) => void;
    type?: string;
    placeholder?: string;
    className?: string;
    setFocus?: (isFocus: boolean) => void;
};

export type InputWithValidationProps = InputProps & {
    isRequired: boolean;
    errorMessage: string;
    validator: (value: string) => boolean;
};

export const Input = React.memo(
    ({
        value,
        onChange,
        name,
        type = 'text',
        placeholder = '',
        className = '',
        setFocus = () => {},
    }: InputProps) => {
        const i18nPlaceHolderLabel = useGetTranslatedLabel(placeholder as commonLabels);

        return (
            <input
                onBlur={() => setFocus(false)}
                onFocus={() => setFocus(true)}
                name={name}
                type={type}
                value={value}
                className={className}
                placeholder={i18nPlaceHolderLabel}
                onChange={(e) => onChange(e.target.value)}
            ></input>
        );
    }
);

export const InputWithValidation = ({
    onChange,
    value,
    name,
    className,
    validator,
    errorMessage,
    isRequired,
}: InputWithValidationProps) => {
    const [isInFocus, setFocus] = useState(false);
    const [isValid, setValid] = useState(!isRequired);
    const onChangeWithValidation = useCallback(
        (value: string) => {
            const trimValue = value.trim();
            setValid(validator(trimValue));
            onChange(trimValue);
        },
        [onChange, validator, setValid]
    );

    const shouldDisplayInlineError = isInFocus && !isValid;

    return (
        <>
            <Input
                name={name}
                value={value}
                setFocus={setFocus}
                onChange={onChangeWithValidation}
                className={`${className} ${isValid ? '' : 'invalid'}`}
            />
            {shouldDisplayInlineError ? (
                <p className="modal-pair_error-message">{errorMessage}</p>
            ) : null}
        </>
    );
};
