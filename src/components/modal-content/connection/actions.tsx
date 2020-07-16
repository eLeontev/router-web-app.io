import React from 'react';

import { ButtonWithPostHandler } from '../../common/button';
import { WPSAction } from './wps.action';

import { useGetTranslatedLabel } from '../../../services/i18n.service';

import { actionNames } from '../../../constants/actions.constants';
import { modalActionHandlers } from '../../../actions/actions';

import { ConnectionAction } from '../../../models/dashboard.model';
import { ConnectionInfoPropsWithSetters } from '../../../models/modals.model';

export const getActionStatus = (isActive: boolean) =>
    `modal-action-button__${isActive ? 'active' : 'inactive'}`;

export const GetActionButton = (
    { actionType, isActive }: ConnectionAction,
    connectionInfoPropsWithSetters: ConnectionInfoPropsWithSetters
) => {
    const actionLabel = useGetTranslatedLabel(actionNames[actionType]);

    return (
        <ButtonWithPostHandler
            key={actionType}
            isActive={isActive}
            className={`modal-action-button ${getActionStatus(isActive)}`}
            buttonName={actionLabel}
            buttonHandler={
                isActive
                    ? () => modalActionHandlers[actionType](connectionInfoPropsWithSetters)
                    : () => {}
            }
        />
    );
};

export const Actions = (props: ConnectionInfoPropsWithSetters) => (
    <section className="actions">
        <section className="actions-main">
            {props.actions.main.map((action: ConnectionAction) => GetActionButton(action, props))}
        </section>
        <WPSAction {...props} />
    </section>
);
