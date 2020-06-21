import React from 'react';
import {
    CardProps,
    SystemCard,
    SystemParamProps,
} from '../../../models/cards.models';

export const SystemParamComponent = ({
    systemParam: { label, value },
}: SystemParamProps) => (
    <section className="param-pair">
        <p className="param-pair__label">{label}</p>
        <p className="param-pair__value">{value}</p>
    </section>
);

export const SystemCardComponent = (props: CardProps) => {
    const {
        title,
        cardContent: { systemParams },
    } = props.card as SystemCard;
    return (
        <section className="application-card">
            <h3 className="card__title">{title}</h3>
            <section className="card-content">
                {systemParams.map((systemParam) => (
                    <SystemParamComponent
                        key={systemParam.label}
                        systemParam={systemParam}
                    />
                ))}
            </section>
        </section>
    );
};
