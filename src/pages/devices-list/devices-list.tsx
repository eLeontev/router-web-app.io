import React, { useContext } from 'react';
import { useRecoilValue } from 'recoil';
import '../../styles/typography.page.scss';

import { Button } from '../../components/common/button';
import { PageContent } from '../../components/common/page-content';
import { Dirty } from '../../components/common/dirty';

import { DevicesSettings } from '../../components/devices-list/devices-settings';
import { ModalContext } from '../../context/modal.context';

import { deviceDirtyState, validatorState } from '../../recoil-state/devices-list.settings.state';
import { useGetTranslatedLabelsObject } from '../../services/i18n.service';
import { useDirty } from '../../hooks/toggle-dirty.hook';

import { devicesListLabels } from '../../models/devices-list.model';
import { modalContentTypes } from '../../constants/modal.constants';
import { commonLabels } from '../../models/common.model';

export const DevicesList = () => {
    const isValid = useRecoilValue(validatorState);
    const { isDirty, onCancel, onSave } = useDirty(deviceDirtyState);
    const { setModal } = useContext(ModalContext);

    const i18nLabels = useGetTranslatedLabelsObject([
        devicesListLabels.titleLabel,
        devicesListLabels.descriptionLabel,
        devicesListLabels.unregisteredDevicesTitleLabel,
        devicesListLabels.unregisteredDevicesDescriptionLabel,
        devicesListLabels.registeredDevicesTitleLabel,
        devicesListLabels.blockedDevicesDescriptionLabel,
        devicesListLabels.blockedDevicesTitleLabel,
        devicesListLabels.addDeviceButtonLabel,
        commonLabels.saveButtonLabel,
        commonLabels.cancelButtonLabel,
    ]);

    return (
        <PageContent classModifier="devices">
            <h1 className="page-title">{i18nLabels.titleLabel}</h1>
            <section className="page-content-wrapper">
                <p className="page-text">{i18nLabels.descriptionLabel}</p>
                <h2 className="page-sub-title">{i18nLabels.unregisteredDevicesTitleLabel}</h2>
                <p className="page-text">{i18nLabels.unregisteredDevicesDescriptionLabel}</p>
                <hr />
                <DevicesSettings />
                <h2 className="page-sub-title">{i18nLabels.registeredDevicesTitleLabel}</h2>
                <hr />
                <h2 className="page-sub-title">{i18nLabels.blockedDevicesTitleLabel}</h2>
                <p className="page-text">{i18nLabels.blockedDevicesDescriptionLabel}</p>
                <hr />
                <Button
                    className="show-more-button"
                    buttonHandler={() => setModal({ type: modalContentTypes.registerDeviceType })}
                    buttonName={i18nLabels.addDeviceButtonLabel}
                ></Button>
            </section>
            <Dirty
                onCancel={onCancel}
                onSave={onSave(() => console.log('saved'))}
                isDirty={isDirty}
                isValid={isValid}
                cancelButtonLabel={i18nLabels.cancelButtonLabel}
                saveButtonLabel={i18nLabels.saveButtonLabel}
            />
        </PageContent>
    );
};

export default DevicesList;
