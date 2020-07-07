import { navSectionTypes, SectionUrls } from '../models/nav.model';
import { sectionsUrls } from '../constants/nav.constants';

export const getActiveSection = (pathname: string): navSectionTypes => {
    const activeSectionEntries = sectionsUrls.find(({ urls }: SectionUrls) =>
        urls.includes(pathname)
    );
    if (activeSectionEntries) {
        return activeSectionEntries.type;
    }

    return navSectionTypes.all;
};

export const getSectionClassNames = (type: navSectionTypes, shouldExpandSection: boolean) =>
    `nav-section nav-section__${type} ${shouldExpandSection ? 'nav-section__expanded' : ''}`;

export const getSectionTitleClassNames = (isActive: boolean, shouldExpandSection: boolean) =>
    `nav-section-title nav-section-title__${shouldExpandSection ? 'expanded' : 'collapsed'} ${
        isActive ? 'nav-section-title__active' : ''
    }`;
