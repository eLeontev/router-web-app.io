import React, { useContext } from 'react';
import { useRecoilValue } from 'recoil';

import { Button } from '../../components/common/button';
import { PageContent } from '../../components/common/page-content';
import { Dirty } from '../../components/common/dirty';
import { DevicesSettings } from '../../components/devices-list/devices-settings';
import { DevicesListTable } from '../../components/devices-list/devices-list-table/devices-list-table';

import { ModalContext } from '../../context/modal.context';

import { useGetDeviceLists } from '../../hooks/device-list-data.hook';
import { useDirty } from '../../hooks/toggle-dirty.hook';

import { deviceDirtyState, validatorState } from '../../recoil-state/devices-list.settings.state';
import { useGetTranslatedLabelsObject } from '../../services/i18n.service';

import { modalContentTypes } from '../../constants/modal.constants';

import { deviceListTableTypes, devicesListLabels } from '../../models/devices-list.model';
import { commonLabels } from '../../models/common.model';

export const DevicesList = () => {
    const { unregisteredDevices, registeredDevices, blockedDevices } = useGetDeviceLists();
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
                <DevicesListTable
                    rows={registeredDevices}
                    type={deviceListTableTypes.registeredType}
                />
                <DevicesSettings />
                <h2 className="page-sub-title">{i18nLabels.registeredDevicesTitleLabel}</h2>
                <DevicesListTable
                    rows={unregisteredDevices}
                    type={deviceListTableTypes.unregisteredType}
                />
                <h2 className="page-sub-title">{i18nLabels.blockedDevicesTitleLabel}</h2>
                <p className="page-text">{i18nLabels.blockedDevicesDescriptionLabel}</p>
                <DevicesListTable rows={blockedDevices} type={deviceListTableTypes.blockedType} />
                <Button
                    className="show-more-button"
                    buttonHandler={() => setModal({ type: modalContentTypes.registerDeviceType })}
                    buttonName={i18nLabels.addDeviceButtonLabel}
                ></Button>
            </section>
            <Dirty
                onCancel={onCancel}
                onSave={onSave(() => console.log('saved'))}
                shouldDisplayDirtyBar={isDirty}
                isValid={isValid}
                cancelButtonLabel={i18nLabels.cancelButtonLabel}
                saveButtonLabel={i18nLabels.saveButtonLabel}
            />
        </PageContent>
    );
};

export default DevicesList;
