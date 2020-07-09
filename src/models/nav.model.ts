export enum navActionTypes {
    logout = 'logout',
    help = 'help',
    translate = 'translate',
    triggerNav = 'triggerNav',

    dashboard = 'dashboard',
    traffic = 'traffic',

    wired = 'wired',
    wirelessISP = 'wirelessISP',
    otherConnections = 'otherConnections',
    connectionPriorities = 'connectionPriorities',

    deviceList = 'deviceList',
    homeSegment = 'homeSegment',
    guestSegment = 'guestSegment',
    wifiSegment = 'wifiSegment',

    internetSafety = 'internetSafety',
    firewall = 'firewall',
    forwarding = 'forwarding',
    routing = 'routing',
    domainName = 'domainName',
    wirelessACL = 'wirelessACL',

    systemSettings = 'systemSettings',
    applications = 'applications',
    usersAndAccess = 'usersAndAccess',
    diagnostics = 'diagnostics',
}

export enum navSectionTypes {
    status = 'status',
    internet = 'internet',
    network = 'network',
    rules = 'rules',
    management = 'management',
    none = 'none',
    all = 'all',
}

export type navLabels = navSectionTypes | navActionTypes;

export type NavSection = {
    type: navSectionTypes;
    linkActions: LinkActions;
    isExpanded: boolean;
};
export type NavSections = Array<NavSection>;

export type LinkAction = {
    type: navActionTypes;
};
export type LinkActions = Array<LinkAction>;

export type NavigationData = {
    sections: NavSections;
    footer: {
        logoutAction: LinkAction;
        linkActions: LinkActions;
        triggerNavAction: LinkAction;
    };
};

export type NavSectionTitles = {
    [title in navSectionTypes]: string;
};

export type NavActionLabels = {
    [label in navActionTypes]: string;
};

export type NavActionLinks = {
    [link in navActionTypes]: string;
};

export type SectionUrls = {
    type: navSectionTypes;
    urls: Array<string>;
};

export type SectionsUrls = Array<SectionUrls>;

export type NavigationBarProps = {
    isNavBarExpanded: boolean;
    toggleNavBar: () => void;
};
