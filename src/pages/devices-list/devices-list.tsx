import React from 'react';
import '../../styles/text-pages.scss';

import { Button } from '../../components/common/button';

import { useGetTranslatedLabelsObject } from '../../services/i18n.service';
import { devicesListLabels } from '../../models/devices-list.model';

export const DevicesList = () => {
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
        <section className="devices page-content">
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
                    buttonHandler={() => {}}
                    buttonName={i18nLabels.addDeviceButtonLabel}
                ></Button>
            </section>
        </section>
    );
};

export default DevicesList;
