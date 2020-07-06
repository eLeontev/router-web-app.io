import {
    NavActionLinks,
    NavActionLabels,
    NavSectionTitles,
    navSectionTypes,
    navActionTypes,
} from '../models/nav.model';

export const navSectionTitles: NavSectionTitles = {
    [navSectionTypes.rules]: 'network rules',
    [navSectionTypes.management]: 'management',
    [navSectionTypes.internet]: 'internet',
    [navSectionTypes.network]: 'my networks and wifi',
    [navSectionTypes.status]: 'status',
};

export const navActionLabels: NavActionLabels = {
    [navActionTypes.logout]: 'Logout',
    [navActionTypes.help]: 'Help Center',
    [navActionTypes.translate]: 'English',
    [navActionTypes.triggerNav]: 'Hide navigation menu',

    [navActionTypes.dashboard]: 'System dashboard',
    [navActionTypes.traffic]: 'Host traffic monitor',

    [navActionTypes.wired]: 'Wired',
    [navActionTypes.wirelessISP]: 'Wireless ISP',
    [navActionTypes.otherConnections]: 'Other connections',
    [navActionTypes.connectionPriorities]: 'Connection priorities',

    [navActionTypes.deviceList]: 'Device lists',
    [navActionTypes.homeSegment]: 'Home segment',
    [navActionTypes.guestSegment]: 'Guest segment',
    [navActionTypes.wifiSegment]: 'Wi-Fi system',

    [navActionTypes.internetSafety]: 'Internet safety',
    [navActionTypes.firewall]: 'Firewall',
    [navActionTypes.forwarding]: 'Forwarding',
    [navActionTypes.routing]: 'Routing',
    [navActionTypes.domainName]: 'Domain name',
    [navActionTypes.wirelessACL]: 'Wireless ACL',

    [navActionTypes.systemSettings]: 'System settings',
    [navActionTypes.applications]: 'Applications',
    [navActionTypes.usersAndAccess]: 'Users and access',
    [navActionTypes.diagnostics]: 'Diagnostics',
};

export const navActionLinks: NavActionLinks = {
    [navActionTypes.logout]: '',
    [navActionTypes.help]: '',
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
