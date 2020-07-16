import React from 'react';

import { Button } from './button';

import { useGetTranslatedLabels } from '../../services/i18n.service';

import { commonLabels } from '../../models/common.model';

export type DirtyProps = {
    isDirty: boolean;
    isValid: boolean;
    onSave: () => void;
    onCancel: () => void;
};
export const Dirty = React.memo(({ onSave, onCancel, isDirty, isValid }: DirtyProps) => {
    const [saveButtonLabel, cancelButtonLabel] = useGetTranslatedLabels([
        commonLabels.saveButtonLabel,
        commonLabels.cancelButtonLabel,
    ]);

    return (
        <section className={`dirty-section dirty-section__${isDirty ? 'visible' : 'hidden'}`}>
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
    );
});
