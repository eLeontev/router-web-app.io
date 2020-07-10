import { LazyExoticComponent } from 'react';

export type ComponentsToRender = {
    [path: string]: LazyExoticComponent<() => JSX.Element>;
};
