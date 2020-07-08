import React from 'react';
import { useRecoilValue } from 'recoil';
import './navigation-sections.scss';

import { DefaultSection, Section } from './navigation-section';

import { navSectionsState } from '../../../recoil-state/navigation/nav-sections.atom';

import { NavSection } from '../../../models/nav.model';

export const NavigationSections = () => {
    const sections = useRecoilValue(navSectionsState);

    return (
        <section className="nav-sections">
            {sections.map((navSection: NavSection) => (
                <Section key={navSection.type} {...navSection} />
            ))}
            <DefaultSection />
        </section>
    );
};
