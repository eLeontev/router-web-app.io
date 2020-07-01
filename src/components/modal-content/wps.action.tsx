import React, { useCallback, useState } from 'react';

import { Button } from '../common/button';

import { getActionStatus } from './actions';
import {
    actionNames,
    wpsActivationDuration,
} from '../../constants/actions.constants';
import { modalActionHandlers } from '../../actions/actions';
import { connectionActionTypes } from '../../constants/modal.constants';
import { ConnectionInfoPropsWithSetters } from '../../models/modals.model';
import { Timer } from '../common/timer';

const actionHandler = modalActionHandlers[connectionActionTypes.wpsType];
const { wpsType, activatedWpsType } = actionNames;

export type WPSActionProps = {
    isActive: boolean;
    connectionInfoPropsWithSetters: ConnectionInfoPropsWithSetters;
};

export const WPSAction = (props: ConnectionInfoPropsWithSetters) => {
    const { isActive } = props.actions.WPS;

    const [isWPSActivated, activateWPS] = useState(false);
    const buttonHandler = useCallback(() => {
        activateWPS((isWPSActivated: boolean) => !isWPSActivated);
        actionHandler(props).catch(() => activateWPS(false));
    }, [props]);

    const actionName = isWPSActivated ? activatedWpsType : wpsType;

    return (
        <section className="acitons-wps">
            <Button
                className={`modal-action-button ${getActionStatus(
                    isActive
                )} wps`}
                buttonName={actionName}
                buttonHandler={isActive ? buttonHandler : () => {}}
            />
            {isWPSActivated ? (
                <Timer
                    duration={wpsActivationDuration}
                    fallback={() => activateWPS(false)}
                />
            ) : null}
        </section>
    );
};
