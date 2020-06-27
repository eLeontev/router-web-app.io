import React from 'react';
import { CardProps } from '../../../models/dashboard.model';
import { Message } from '../../common/message';

export const UnknownCard = ({ card: { type } }: CardProps) => (
    <section className="unknown-card">
        <Message
            message={`card with type: ${type} is not found`}
            type="error"
            onClose={() => {}}
            shouldHideCloseButton
        />
    </section>
);
