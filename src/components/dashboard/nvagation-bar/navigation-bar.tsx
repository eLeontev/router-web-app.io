import React from 'react';
import { RecoilRoot } from 'recoil';

import './navigation-bar.scss';

import { NavigationSections } from './navigation-sections';
import { NavigationFooter } from './navigation-footer';

import { useExpandCollapseHook } from '../../../hooks/expand-collpase.hook';

import { NavigationBarProps } from '../../../models/navigation.model';

export const NavigationBar = ({ isNavBarExpanded, triggerNavBar }: NavigationBarProps) => {
    const expandCollapseNavBarClassName = useExpandCollapseHook(isNavBarExpanded);

    return (
        <RecoilRoot>
            <nav className={expandCollapseNavBarClassName}>
                <section
                    onClick={triggerNavBar}
                    className={`nav-background nav-background__${expandCollapseNavBarClassName}`}
                ></section>
                <section className="nav-container">
                    <NavigationSections
                        isNavBarExpanded={isNavBarExpanded}
                        triggerNavBar={triggerNavBar}
                    />
                    <NavigationFooter
                        isNavBarExpanded={isNavBarExpanded}
                        triggerNavBar={triggerNavBar}
                    />
                </section>
            </nav>
        </RecoilRoot>
    );
};
