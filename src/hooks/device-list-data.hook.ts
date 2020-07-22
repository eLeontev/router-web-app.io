import { useEffect, useState } from 'react';

import { getDeviceListTableMockData } from '../services/devices-list.service';

import { unregisteredDeviceListDataMock } from '../mock/devices-list.mock';

import { deviceTableContentUpdateDelay } from '../constants/devices-list.constants';

export const useGetDeviceLists = () => {
    const [devices, setState] = useState({
        registeredDevices: getDeviceListTableMockData(unregisteredDeviceListDataMock),
        unregisteredDevices: getDeviceListTableMockData(unregisteredDeviceListDataMock),
        blockedDevices: getDeviceListTableMockData(unregisteredDeviceListDataMock),
    });

    useEffect(() => {
        const timerId = setInterval(() => {
            setState((state) => ({
                blockedDevices: getDeviceListTableMockData(state.blockedDevices),
                registeredDevices: getDeviceListTableMockData(state.registeredDevices),
                unregisteredDevices: getDeviceListTableMockData(state.unregisteredDevices),
            }));
        }, deviceTableContentUpdateDelay);
        return () => clearInterval(timerId);
    }, [setState]);

    return devices;
};
