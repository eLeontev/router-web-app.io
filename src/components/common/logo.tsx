import React from 'react';

export type LogoProps = {
    src: string;
    className: string;
};

export const Logo = ({ src, className }: LogoProps) => (
    <img className={className} src={src} alt="loading"></img>
);
