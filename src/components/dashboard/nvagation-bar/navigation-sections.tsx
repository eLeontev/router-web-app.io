import React, { useRef } from 'react';
import { useRecoilValue } from 'recoil';
import './navigation-sections.scss';

import { Section } from './navigation-section';

import { navSectionsState } from '../../../recoil-state/navigation/nav-sections.atom';
import { useVerticalPerfectScroll } from '../../../hooks/vertical-scroll.hook';
import { useDefaultExpandNavBarHandler } from '../../../hooks/expand-nav-bar.hook';

import { NavSection } from '../../../models/nav.model';

export const NavigationSections = () => {
    const sections = useRecoilValue(navSectionsState);
    const sectionsRef = useRef<HTMLElement>((null as unknown) as HTMLElement);

    useVerticalPerfectScroll(sectionsRef);
    const onExpandNavBarHandler = useDefaultExpandNavBarHandler();

    return (
        <>
            <section ref={sectionsRef} className="nav-sections" onClick={onExpandNavBarHandler}>
                {sections.map((navSection: NavSection) => (
                    <Section key={navSection.type} {...navSection} />
                ))}
            </section>
        </>
    );
};
