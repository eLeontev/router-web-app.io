import { ConnectionInfoPropsWithSetters } from '../models/modals.model';

export const copyPasteActionHandler = async ({
    credentials: { password },
}: ConnectionInfoPropsWithSetters) => {
    if (password && navigator.clipboard) {
        return await navigator.clipboard.writeText(password);
    }
};
