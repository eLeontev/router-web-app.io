import React from 'react';
import './navigation-bar.scss';

export const NavigationBar = ({ isCollapsed }: any) => {
    return (
        <section className="navbar-container">
            <section
                className={`navbar navbar__${
                    isCollapsed ? 'collapsed' : 'expanded'
                }`}
            ></section>
        </section>
    );
};
