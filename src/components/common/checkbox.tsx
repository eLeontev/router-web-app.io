import React from 'react';
import './checkbox.scss';

export type CheckboxProps = {
    isDisable: boolean;
    isActive: boolean;
    triggerCheckbox: (isActive: boolean) => void;
};

const setCheckboxClassName = (isActive: boolean) =>
    isActive ? 'checkbox__active' : 'checkbox__inactive';
const setCheckboxBarClassName = (isActive: boolean) =>
    isActive ? 'checkbox--bar__active' : 'checkbox--bar__inactive';

const setCheckboxClassNameDisabled = (isDisable: boolean) =>
    isDisable ? 'checkbox__disabled' : 'checkbox__enabled';
export const Checkbox = React.memo(
    ({ isActive, triggerCheckbox, isDisable }: CheckboxProps) => (
        <section
            className={`checkbox ${setCheckboxClassName(
                isActive
            )} ${setCheckboxClassNameDisabled(isDisable)}`}
        >
            <span
                onClick={() => !isDisable && triggerCheckbox(!isActive)}
                className={`checkbox--bar ${setCheckboxBarClassName(isActive)}`}
            ></span>
        </section>
    )
);
