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

export const getSectionClassNames = (type: navSectionTypes) => `nav-section nav-section__${type}`;

export const getSectionTitleClassNames = (isActive: boolean, shouldExpandSection: boolean) =>
    `nav-section-title nav-section-title__${shouldExpandSection ? 'expanded' : 'collapsed'} ${
        isActive ? 'nav-section-title__active' : ''
    }`;

export const getActionsClassNames = (shouldExpandSection: boolean) =>
    `nav-section-actions nav-section-actions__${shouldExpandSection ? 'expanded' : 'collapsed'}`;
