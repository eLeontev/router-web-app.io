import { modalContentTypes } from '../constants/modal.constants';
import { FunctionComponent } from 'react';
import { ConnectionInfo } from './dashboard.model';

export type SetLogo = (src: string) => void;

export type ConnectionInfoProps = ConnectionInfo & {
    name: string;
    range: string;
};

export type RegisterNewDeviceInfoProps = {
    type: modalContentTypes;
};

export type ConnectionInfoPropsWithSetters = ConnectionInfoProps & {
    setLogo: SetLogo;
};
export type ModalContentComponents = {
    [type in modalContentTypes]: FunctionComponent<ModalInfo>;
};

export type ModalInfo = ConnectionInfoProps | RegisterNewDeviceInfoProps | null;
export type SetModal = (modalInfo: ModalInfo) => void;

export type ModalInfoContext = {
    modalInfo: ModalInfo;
    setModal: SetModal;
};

export enum modalLabels {
    networkNameLabel = 'networkNameLabel',
    passwordLabel = 'passwordLabel',
    connectionDescriptionLabel = 'connectionDescriptionLabel',
    registerNewDeviceTitleLabel = 'registerNewDeviceTitleLabel',
    hostNameLabel = 'hostNameLabel',
    connectionPolicyLabel = 'connectionPolicyLabel',
    wirelessAccessControlTitleLabel = 'wirelessAccessControlTitleLabel',
    wirelessAccessControlDescriptionLabel = 'wirelessAccessControlDescriptionLabel',
    registerDeviceLabel = 'registerDeviceLabel',
    requiredFieldErrorLabel = 'requiredFieldErrorLabel',
    stayButtonLabel = 'stayButtonLabel',
    leaveButtonLabel = 'leaveButtonLabel',
    defaultPolicyLabel = 'defaultPolicyLabel',
    noInternetAccessLabel = 'noInternetAccessLabel',
    controlAccessLinkLabel = 'controlAccessLinkLabel',
}

export enum dynamicModalLabels {
    connectionTitleLabel = 'connectionTitleLabel',
}
