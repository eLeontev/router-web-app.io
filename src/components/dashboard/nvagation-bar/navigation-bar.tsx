import React from 'react';
import './navigation-bar.scss';

import { NavigationMenu } from './navigation-menu';
import { NavigationFooter } from './navigation-footer';

import { useExpandCollapseHook } from '../../../hooks/expand-collpase.hook';

export type NavigationBarProps = {
    isNavBarExpanded: boolean;
    triggerNavBar: () => void;
};

export const NavigationBar = ({ isNavBarExpanded, triggerNavBar }: NavigationBarProps) => {
    const expandCollapseNavBarClassName = useExpandCollapseHook(isNavBarExpanded);

    return (
        <nav className={expandCollapseNavBarClassName}>
            {isNavBarExpanded ? (
                <section onClick={triggerNavBar} className="nav-background"></section>
            ) : null}
            <section className={`nav-container`}>
                <section className={`nav`}>
                    <NavigationMenu isNavBarExpanded={isNavBarExpanded} />
                </section>
                <NavigationFooter triggerNavBar={triggerNavBar} />
            </section>
        </nav>
    );
};
