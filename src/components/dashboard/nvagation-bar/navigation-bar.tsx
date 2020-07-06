import React, { useCallback } from 'react';
import './navigation-bar.scss';

export type NavigationBarProps = {
    isCollapsed: boolean;
    triggerNavBarStatus: (cb: (isCollapsed: boolean) => boolean) => void;
};

export const getExpandedNavBarClass = (isCollapsed: boolean) =>
    isCollapsed ? '' : 'navbar-container__navbar-expanded';

export const NavigationBar = ({ isCollapsed, triggerNavBarStatus }: NavigationBarProps) => {
    const triggerNavBar = useCallback(
        () => triggerNavBarStatus((isCollapsed: boolean) => !isCollapsed),
        [triggerNavBarStatus]
    );
    return (
        <nav>
            {isCollapsed ? null : (
                <section onClick={triggerNavBar} className="navbar-background"></section>
            )}
            <section
                onClick={triggerNavBar}
                className={`navbar-container ${getExpandedNavBarClass(isCollapsed)}`}
            >
                <section
                    className={`navbar navbar__${isCollapsed ? 'collapsed' : 'expanded'}`}
                ></section>
            </section>
        </nav>
    );
};
