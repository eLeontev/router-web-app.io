import React from 'react';
import './message.scss';

import { Button } from './button';

export const Message = React.memo(({ message, type, onClose }: any) =>
    message ? (
        <section className="message">
            <p className={type}>
                {message}
                <Button
                    className="close-button"
                    buttonName="x"
                    buttonHandler={onClose}
                />
            </p>
        </section>
    ) : null
);
