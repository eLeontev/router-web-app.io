import React from 'react';

import { Button } from './button';

export type DirtyProps = {
    shouldDisplayDirtyBar: boolean;
    isValid: boolean;
    onSave: () => void;
    onCancel: () => void;
    saveButtonLabel: string;
    cancelButtonLabel: string;
    classNameModifier?: string;
};

export const Dirty = React.memo(
    ({
        onSave,
        onCancel,
        shouldDisplayDirtyBar,
        isValid,
        saveButtonLabel,
        cancelButtonLabel,
        classNameModifier = '',
    }: DirtyProps) => (
        <section
            className={`dirty-section dirty-section__${
                shouldDisplayDirtyBar ? 'visible' : 'hidden'
            } ${classNameModifier}`}
        >
            <Button
                disabled={!isValid}
                buttonHandler={onSave}
                buttonName={saveButtonLabel}
                className="confirmation-button confirmation-button__save"
            />
            <Button
                buttonHandler={onCancel}
                buttonName={cancelButtonLabel}
                className="confirmation-button confirmation-button__cancel"
            />
        </section>
    )
);
