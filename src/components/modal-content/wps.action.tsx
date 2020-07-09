import React, { useCallback, useState } from 'react';

import { Button } from '../common/button';
import { Timer } from '../common/timer';

import { useGetTranslatedLabel } from '../../services/i18n.service';

import { getActionStatus } from './actions';
import { modalActionHandlers } from '../../actions/actions';

import { actionNames, wpsActivationDuration } from '../../constants/actions.constants';
import { connectionActionTypes } from '../../constants/modal.constants';

import { ConnectionInfoPropsWithSetters } from '../../models/modals.model';

const actionHandler = modalActionHandlers[connectionActionTypes.wpsType];
const { wpsType, activatedWpsType } = actionNames;

export const WPSAction = (props: ConnectionInfoPropsWithSetters) => {
    const { isActive } = props.actions.WPS;

    const [isWPSActivated, activateWPS] = useState(false);
    const buttonHandler = useCallback(() => {
        activateWPS((isWPSActivated: boolean) => !isWPSActivated);
        actionHandler(props).catch(() => activateWPS(false));
    }, [props]);

    const actionLabel = useGetTranslatedLabel(isWPSActivated ? activatedWpsType : wpsType);

    return (
        <section className="acitons-wps">
            <Button
                className={`modal-action-button ${getActionStatus(isActive)} wps`}
                buttonName={actionLabel}
                buttonHandler={isActive ? buttonHandler : () => {}}
            />
            {isWPSActivated ? (
                <Timer duration={wpsActivationDuration} fallback={() => activateWPS(false)} />
            ) : null}
        </section>
    );
};
