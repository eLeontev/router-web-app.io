import React, { PropsWithChildren } from 'react';
import './devices-settings-pair.scss';

import { Dropdown, DropdownWithInput } from '../common/dropdown';
import { SimpleCheckBox } from '../common/checkbox';

import { Labels } from '../../models/i18n.model';

import {
    asymmetricState,
    filterState,
    speedStates,
    speedValidatorState,
} from '../../recoil-state/devices-list.settings.state';

import { devicesDynamicListLabels, speedKeys, SpeedValue } from '../../models/devices-list.model';
import { filterOptions, speedOptions, speedRange } from '../../constants/devices-list.constants';
import { useGetSettingPairData } from '../../hooks/prepare-settings-pair-data.hook';
import { useRecoilValue } from 'recoil';
import { useGetDynamicTranslatedLabel } from '../../services/i18n.service';

export type DeviceSettingsPairProps = {
    label: Labels;
};

export type SpeedPairProps = DeviceSettingsPairProps & {
    speedStateKey: speedKeys;
};

export type AsymmetricPairProps = DeviceSettingsPairProps & {
    name: string;
};

export type SettingsValueProps = {
    i18nLabel: string;
    isAligned?: boolean;
};
export const SettingsValue = ({
    children,
    i18nLabel,
    isAligned,
}: PropsWithChildren<SettingsValueProps>) => (
    <section className={`setting-pair ${isAligned ? ' setting-pair__aligned' : ''}`}>
        <p className="page-text">{i18nLabel}</p>
        {children}
    </section>
);

export const getSelectedFilterId = (filterId: string): string => filterId;
export const FilterPair = React.memo(({ label }: DeviceSettingsPairProps) => {
    const pairData = useGetSettingPairData(filterState, filterOptions, label, getSelectedFilterId);
    const { i18nLabel, setState, dropdownOptions } = pairData;

    return (
        <SettingsValue i18nLabel={i18nLabel}>
            <Dropdown onChange={setState} dropdownOptions={dropdownOptions} />
        </SettingsValue>
    );
});

const { speedValueRangeErrorLabel } = devicesDynamicListLabels;
export const getSelectedSpeedId = ({ unitId }: SpeedValue) => unitId;
export const SpeedPair = React.memo(({ speedStateKey, label }: SpeedPairProps) => {
    const state = speedStates[speedStateKey];
    const pairData = useGetSettingPairData(state, speedOptions, label, getSelectedSpeedId);
    const { i18nLabel, setState, dropdownOptions, value } = pairData;

    const isValid = useRecoilValue(speedValidatorState[speedStateKey]);
    const i18nErrorMessage = useGetDynamicTranslatedLabel(speedValueRangeErrorLabel, speedRange);

    return (
        <SettingsValue i18nLabel={i18nLabel}>
            <DropdownWithInput
                value={value.value || ''}
                onChange={setState}
                dropdownOptions={dropdownOptions}
                classNameModifier={isValid ? '' : 'invalid'}
            />
            {isValid ? null : <p className="page-text__error-inline">{i18nErrorMessage}</p>}
        </SettingsValue>
    );
});

export const AsymmetricPair = React.memo(({ name, label }: AsymmetricPairProps) => {
    const pairData = useGetSettingPairData(asymmetricState, [], label, () => '');
    const { setState, i18nLabel, value: checked } = pairData;

    const onChangeHandler = () => setState((checked: boolean) => !checked);

    return (
        <SettingsValue i18nLabel={i18nLabel} isAligned>
            <SimpleCheckBox name={name} checked={checked} onChange={onChangeHandler} />
        </SettingsValue>
    );
});
