import { NavActionLinks, navActionTypes, navSectionTypes, SectionsUrls } from '../models/nav.model';

export const navActionLinks: NavActionLinks = {
    [navActionTypes.logout]: '',
    [navActionTypes.help]: 'https://help.keenetic.com/hc/en',
    [navActionTypes.translate]: '',
    [navActionTypes.triggerNav]: '',

    [navActionTypes.dashboard]: '/dashboard',
    [navActionTypes.traffic]: '/controlPanel/traffic-monitor/',

    [navActionTypes.wired]: '/controlPanel/wired/',
    [navActionTypes.wirelessISP]: '/controlPanel/wifiClient/',
    [navActionTypes.otherConnections]: '/controlPanel/otherConnections',
    [navActionTypes.connectionPriorities]: '/controlPanel/policies',

    [navActionTypes.deviceList]: '/controlPanel/devicesList',
    [navActionTypes.homeSegment]: '/controlPanel/segments/HomeSegment',
    [navActionTypes.guestSegment]: '/controlPanel/segments/GuestSegment',
    [navActionTypes.wifiSegment]: '/controlPanel/wifiSystem',

    [navActionTypes.internetSafety]: '/controlPanel/secureInternet',
    [navActionTypes.firewall]: '/controlPanel/firewall',
    [navActionTypes.forwarding]: '/controlPanel/portForwarding',
    [navActionTypes.routing]: '/controlPanel/staticRoutes',
    [navActionTypes.domainName]: '/controlPanel/remoteAccess/',
    [navActionTypes.wirelessACL]: '/controlPanel/wirelessAcl/',

    [navActionTypes.systemSettings]: '/controlPanel/system',
    [navActionTypes.applications]: '/controlPanel/apps',
    [navActionTypes.usersAndAccess]: '/controlPanel/administrator',
    [navActionTypes.diagnostics]: '/controlPanel/diagnostics',
};

export const sectionsUrls: SectionsUrls = [
    {
        type: navSectionTypes.status,
        urls: [navActionLinks.dashboard, navActionLinks.traffic],
    },
    {
        type: navSectionTypes.internet,
        urls: [
            navActionLinks.wired,
            navActionLinks.wirelessISP,
            navActionLinks.otherConnections,
            navActionLinks.connectionPriorities,
        ],
    },
    {
        type: navSectionTypes.network,
        urls: [
            navActionLinks.deviceList,
            navActionLinks.homeSegment,
            navActionLinks.guestSegment,
            navActionLinks.wifiSegment,
        ],
    },
    {
        type: navSectionTypes.rules,
        urls: [
            navActionLinks.internetSafety,
            navActionLinks.firewall,
            navActionLinks.forwarding,
            navActionLinks.routing,
            navActionLinks.domainName,
            navActionLinks.wirelessACL,
        ],
    },
    {
        type: navSectionTypes.management,
        urls: [
            navActionLinks.systemSettings,
            navActionLinks.applications,
            navActionLinks.usersAndAccess,
            navActionLinks.diagnostics,
        ],
    },
];
