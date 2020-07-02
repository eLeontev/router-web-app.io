import React from 'react';

import { ButtonWithPostHandler } from '../common/button';

import { actionNames } from '../../constants/actions.constants';
import { modalActionHandlers } from '../../actions/actions';

import { ConnectionAction } from '../../models/dashboard.model';
import { ConnectionInfoPropsWithSetters } from '../../models/modals.model';
import { WPSAction } from './wps.action';

export const getActionStatus = (isActive: boolean) =>
    `modal-action-button__${isActive ? 'active' : 'inactive'}`;

export const getActionButton = (
    { actionType, isActive }: ConnectionAction,
    connectionInfoPropsWithSetters: ConnectionInfoPropsWithSetters
) => (
    <ButtonWithPostHandler
        key={actionType}
        isActive={isActive}
        className={`modal-action-button ${getActionStatus(isActive)}`}
        buttonName={actionNames[actionType]}
        buttonHandler={
            isActive
                ? () => modalActionHandlers[actionType](connectionInfoPropsWithSetters)
                : () => {}
        }
    />
);

export const Actions = (props: ConnectionInfoPropsWithSetters) => (
    <section className="actions">
        <section className="actions-main">
            {props.actions.main.map((action: ConnectionAction) => getActionButton(action, props))}
        </section>
        <WPSAction {...props} />
    </section>
);
