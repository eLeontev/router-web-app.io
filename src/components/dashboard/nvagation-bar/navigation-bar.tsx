import React from 'react';

import './navigation-bar.scss';

import { NavigationSections } from './navigation-sections';
import { NavigationFooter } from './navigation-footer';

import { useExpandCollapseHook } from '../../../hooks/expand-collpase.hook';
import { useToggleNavBar } from '../../../hooks/toggle-nav-bar.recoil.hook';

export const NavigationBar = () => {
    const { isNavBarExpanded, toggleNavBar } = useToggleNavBar();
    const expandCollapseNavBarClassName = useExpandCollapseHook(isNavBarExpanded);

    return (
        <nav className={expandCollapseNavBarClassName}>
            <section
                onClick={toggleNavBar}
                className={`nav-background nav-background__${expandCollapseNavBarClassName}`}
            ></section>
            <section className="nav-container">
                <NavigationSections />
                <NavigationFooter />
            </section>
        </nav>
    );
};
