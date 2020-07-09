import React from 'react';
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
};

export const Input = React.memo(
    ({ value, onChange, name, type = 'text', placeholder = '', className = '' }: InputProps) => {
        const i18nPlaceHolderLabel = useGetTranslatedLabel(placeholder as commonLabels);

        return (
            <input
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
