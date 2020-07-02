import React from 'react';
import './navigation-bar.scss';

export type NavigationBarProps = {
    isCollapsed: boolean;
};

export const NavigationBar = ({ isCollapsed }: NavigationBarProps) => {
    return (
        <section className="navbar-container">
            <section
                className={`navbar navbar__${isCollapsed ? 'collapsed' : 'expanded'}`}
            ></section>
        </section>
    );
};
