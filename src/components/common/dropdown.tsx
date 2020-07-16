import React, { useCallback, useMemo } from 'react';
import './dropdown.scss';

import { Input } from './input';

import { DropdownOptions } from '../../models/common.model';
import { SpeedValue } from '../../models/devices-list.model';

export type DropdownProps = {
    onChange: (value: string) => void;
    dropdownOptions: DropdownOptions<string>;
};

export type DropdownWithInput = {
    value: string | number;
    dropdownOptions: DropdownOptions<string>;
    onChange: (speedValue: SpeedValue) => void;
    classNameModifier?: string;
};

export const Dropdown = React.memo(({ dropdownOptions, onChange }: DropdownProps) => {
    const id = useMemo(
        () => (dropdownOptions.find(({ isSelected }) => isSelected) || dropdownOptions[0]).id,
        [dropdownOptions]
    );

    const onChangeHandler = useCallback(
        ({ target: { value: optionId } }) => {
            onChange(optionId);
        },
        [onChange]
    );

    return (
        <select className="dropdown" value={id} onChange={onChangeHandler}>
            {dropdownOptions.map(({ id, label }) => (
                <option key={id} value={id}>
                    {label}
                </option>
            ))}
        </select>
    );
});

export const DropdownWithInput = React.memo(
    ({ dropdownOptions, onChange, value, classNameModifier }: DropdownWithInput) => {
        const unitId = useMemo(
            () => (dropdownOptions.find(({ isSelected }) => isSelected) || dropdownOptions[0]).id,
            [dropdownOptions]
        );

        const onInputChange = useCallback(
            (value: string) => {
                const preparedValue = value.trim();
                onChange({ value: parseFloat(preparedValue) || 0, unitId });
            },
            [onChange, unitId]
        );

        const onDropdownChange = useCallback(
            (unitId: string) => {
                onChange({ value: Number(value), unitId });
            },
            [value, onChange]
        );

        return (
            <section className={`dropdown-with-input ${classNameModifier}`}>
                <Input
                    value={value}
                    onChange={onInputChange}
                    name="dropdowm-input"
                    className="dropdown-with-input__input"
                />
                <label className="dropdown-wrapper">
                    <Dropdown dropdownOptions={dropdownOptions} onChange={onDropdownChange} />
                </label>
            </section>
        );
    }
);
