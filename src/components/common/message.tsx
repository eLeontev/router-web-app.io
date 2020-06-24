import React from 'react';
import './message.scss';

import { Button } from './button';

export const Message = React.memo(
    ({ message, type, onClose, shouldHideCloseButton = false }: any) =>
        message ? (
            <section className="message">
                <p className={type}>
                    {message}
                    {shouldHideCloseButton ? null : (
                        <Button
                            className="close-message-button"
                            buttonName="x"
                            buttonHandler={onClose}
                        />
                    )}
                </p>
            </section>
        ) : null
);
