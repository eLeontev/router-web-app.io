import React from 'react';
import { Message } from '../../common/message';

export type UnknownCardProps = {
    type: string;
};
export const UnknownCard = ({ type }: UnknownCardProps) => (
    <section className="unknown-card">
        <Message
            message={`card with type: ${type} is not found`}
            type="error"
            onClose={() => {}}
            shouldHideCloseButton
        />
    </section>
);
