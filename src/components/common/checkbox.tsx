import React from 'react';
import './checkbox.scss';

export type CheckboxProps = {
    isActive: boolean;
    triggerCheckbox: (isActive: boolean) => void;
};

const setCheckboxClassName = (isActive: boolean) =>
    isActive ? 'checkbox__enabled' : 'checkbox__disabled';
const setCheckboxBarClassName = (isActive: boolean) =>
    isActive ? 'checkbox--bar__active' : 'checkbox--bar__inactive';

export const Checkbox = React.memo(
    ({ isActive, triggerCheckbox }: CheckboxProps) => (
        <section className={`checkbox ${setCheckboxClassName(isActive)}`}>
            <span
                onClick={() => triggerCheckbox(!isActive)}
                className={`checkbox--bar ${setCheckboxBarClassName(isActive)}`}
            ></span>
        </section>
    )
);
