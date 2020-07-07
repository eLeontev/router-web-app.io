import React from 'react';
import { useRecoilValue } from 'recoil';
import './navigation-sections.scss';

import { DefaultSection, Section } from './navigation-section';

import { navSectionsState } from '../../../recoil-state/navigation/nav-sections.atom';

import { NavSection } from '../../../models/nav.model';
import { NavigationBarProps } from '../../../models/navigation.model';

export const NavigationSections = (props: NavigationBarProps) => {
    const sections = useRecoilValue(navSectionsState);

    return (
        <section className="nav-sections">
            {sections.map((navSection: NavSection) => (
                <Section key={navSection.type} {...navSection} {...props} />
            ))}
            <DefaultSection {...props} />
        </section>
    );
};
