import React from 'react';
import { useRecoilValue } from 'recoil';

import { asymmetricState } from '../../recoil-state/devices-list.settings.state';

import { Button } from '../common/button';
import { FilterPair, SpeedPair, AsymmetricPair } from './devices-settings-pair';

import { useToggleButtonWithI18n } from '../../hooks/toggle-button-with-i18n';
import { useGetTranslatedLabel } from '../../services/i18n.service';

import { devicesListLabels, speedKeys } from '../../models/devices-list.model';
import { cardsLabels } from '../../models/cards.model';
import { navActionTypes } from '../../models/nav.model';

export const Settings = React.memo(() => {
    const isAsymmetric = useRecoilValue(asymmetricState);

    const settingsDescriptionLabel = useGetTranslatedLabel(
        devicesListLabels.settingsDescriptionLabel
    );

    return (
        <section className="settings">
            <p className="page-text">{settingsDescriptionLabel}</p>
            <section className="page-section">
                <FilterPair label={navActionTypes.internetSafety} />
                <SpeedPair
                    speedStateKey={isAsymmetric ? speedKeys.download : speedKeys.common}
                    label={isAsymmetric ? cardsLabels.download : devicesListLabels.speedLimitLabel}
                />
                <AsymmetricPair name="asymmetric" label={devicesListLabels.asymmetricLabel} />
                {isAsymmetric ? (
                    <SpeedPair speedStateKey={speedKeys.upload} label={cardsLabels.upload} />
                ) : null}
            </section>
        </section>
    );
});

export const DevicesSettings = React.memo(() => {
    const { i18nLabels, isHidden, toggleDetailsVisibility } = useToggleButtonWithI18n([
        devicesListLabels.displayDeviceSettingsLabel,
        devicesListLabels.hideDeviceSettingsLabel,
    ]);
    const [displayDeviceSettingsLabel, hideDeviceSettingsLabel] = i18nLabels;

    return (
        <section className="devices-settings">
            <Button
                buttonName={isHidden ? displayDeviceSettingsLabel : hideDeviceSettingsLabel}
                buttonHandler={toggleDetailsVisibility}
                className="details-button"
            />
            {isHidden ? null : <Settings />}
        </section>
    );
});
