import React from 'react';

import { ConnectionImg } from '../../common/connection-image';

import { CardContent, NetworkPortsCardContent, Port } from '../../../models/dashboard.model';

export type PortProps = Port & {
    isNetwork: boolean;
    index: number;
};

export const portIconRenderer = (index: number) => <p className="port_icon">{index}</p>;
export const connectionImgRenderer = (index: number) => (
    <p className="port_img">
        <span className="port_img__index">{index}</span>
        <ConnectionImg />
    </p>
);

export const PortRenderer = ({
    isActive,
    isNetwork,
    portSpeed,
    portType,
    portUnit,
    index,
}: PortProps) => (
    <section className={`port ${isNetwork ? 'port_network' : ''}`}>
        {isNetwork ? connectionImgRenderer(index) : portIconRenderer(index)}
        <section className="port-info">
            <p className="port-info_type">{isActive ? portType : '-'}</p>
            {isActive ? <p className="port-info_speed">{`${portSpeed} ${portUnit}`}</p> : null}
        </section>
    </section>
);

export const NetworkPortsCardComponent = (cardContent: CardContent) => {
    const { ports, networkPortId } = cardContent as NetworkPortsCardContent;

    return (
        <section className="card-content card-content_port">
            {ports.map((port: Port, index: number) => (
                <PortRenderer
                    key={port.portId}
                    {...port}
                    index={index}
                    isNetwork={port.portId === networkPortId}
                />
            ))}
        </section>
    );
};
