import React from 'react';
import '../../styles/typography.page.scss';

import { Button } from '../../components/common/button';
import { PageContent } from '../../components/common/page-content';

import { useGetTranslatedLabelsObject } from '../../services/i18n.service';
import { devicesListLabels } from '../../models/devices-list.model';
import { Dirty } from '../../components/common/dirty';
import { useDirty } from '../../hooks/toggle-dirty.hook';

export const DevicesList = () => {
    const { isDirty, onCancel, onSave, setDirty } = useDirty();

    const i18nLabels = useGetTranslatedLabelsObject([
        devicesListLabels.titleLabel,
        devicesListLabels.descriptionLabel,
        devicesListLabels.unregisteredDevicesTitleLabel,
        devicesListLabels.unregisteredDevicesDescriptionLabel,
        devicesListLabels.registeredDevicesTitleLabel,
        devicesListLabels.blockedDevicesDescriptionLabel,
        devicesListLabels.blockedDevicesTitleLabel,
        devicesListLabels.addDeviceButtonLabel,
    ]);

    return (
        <PageContent classModifier="devices">
            <h1 className="page-title">{i18nLabels.titleLabel}</h1>
            <section className="page-content-wrapper">
                <p className="page-text">{i18nLabels.descriptionLabel}</p>
                <h2 className="page-sub-title">{i18nLabels.unregisteredDevicesTitleLabel}</h2>
                <p className="page-text">{i18nLabels.unregisteredDevicesDescriptionLabel}</p>
                <hr />
                <h2 className="page-sub-title">{i18nLabels.registeredDevicesTitleLabel}</h2>
                <hr />
                <h2 className="page-sub-title">{i18nLabels.blockedDevicesTitleLabel}</h2>
                <p className="page-text">{i18nLabels.blockedDevicesDescriptionLabel}</p>
                <hr />
                <Button
                    className="show-more-button"
                    buttonHandler={() => setDirty(!isDirty)}
                    buttonName={i18nLabels.addDeviceButtonLabel}
                ></Button>
            </section>
            <Dirty
                onCancel={onCancel(() => console.log(123))}
                onSave={onSave(() => console.warn(321))}
                isDirty={isDirty}
            />
        </PageContent>
    );
};

export default DevicesList;
