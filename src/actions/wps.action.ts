import { ConnectionInfoPropsWithSetters } from '../models/modals.model';

export const wpsActionHanlder = async ({
    credentials: { networkId },
}: ConnectionInfoPropsWithSetters) => {
    await Promise.resolve(networkId);
};
