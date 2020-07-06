import React, { useCallback, useState } from 'react';
import './navigation-bar.scss';

import { NavigationMenu } from './navigation-menu';
import { NavigationFooter } from './navigation-footer';

export type NavigationBarProps = {
    isNavBarExpanded: boolean;
    triggerNavBarStatus: (cb: (isCollapsed: boolean) => boolean) => void;
};

export const getExpandedNavBarClass = (isNavBarExpanded: boolean) =>
    isNavBarExpanded ? 'navbar-container__navbar-expanded' : '';

export const getModifier = (isNavBarExpanded: boolean) =>
    isNavBarExpanded ? 'expanded' : 'collapsed';

export const NavigationBar = () => {
    const [isNavBarExpanded, triggerNavBarStatus] = useState(false);
    const triggerNavBar = useCallback(
        () => triggerNavBarStatus((isCollapsed: boolean) => !isCollapsed),
        [triggerNavBarStatus]
    );
    return (
        <nav>
            {isNavBarExpanded ? (
                <section onClick={triggerNavBar} className="navbar-background"></section>
            ) : null}
            <section className={`navbar-container ${getExpandedNavBarClass(isNavBarExpanded)}`}>
                <section className={`navbar navbar__${getModifier(isNavBarExpanded)}`}>
                    <NavigationMenu isNavBarExpanded={isNavBarExpanded} />
                </section>
                <NavigationFooter triggerNavBar={triggerNavBar} />
            </section>
        </nav>
    );
};
