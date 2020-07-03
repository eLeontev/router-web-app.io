import React from 'react';

import { CardContent, NetworkPortsCardContent, Port } from '../../../models/dashboard.model';

export type PortProps = Port & {
    isNetwork: boolean;
    index: number;
};
export const PortRenderer = ({
    isActive,
    isNetwork,
    portSpeed,
    portType,
    portUnit,
    index,
}: PortProps) => (
    <section className={`port ${isNetwork ? 'port_network' : ''}`}>
        <p className="port_icon">
            {index}
            {isNetwork ? <span className="port_icon__network"></span> : null}
        </p>
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
