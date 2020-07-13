import { useCallback, useState } from 'react';

export const useDirty = () => {
    const [isDirty, setDirty] = useState(false);
    const handler = useCallback(
        (cb: () => void) => () => {
            cb();
            setDirty(false);
        },
        [setDirty]
    );

    return {
        isDirty,
        setDirty,
        onSave: handler,
        onCancel: handler,
    };
};
