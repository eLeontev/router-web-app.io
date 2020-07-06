import { navActionTypes, NavigationData, navSectionTypes } from '../models/nav.model';

export const navigationMockData: NavigationData = {
    footer: {
        triggerNavAction: {
            type: navActionTypes.triggerNav,
        },
        logoutAction: {
            type: navActionTypes.logout,
        },
        linkActions: [
            {
                type: navActionTypes.help,
            },
            {
                type: navActionTypes.translate,
            },
        ],
    },
    sections: [
        {
            type: navSectionTypes.status,
            linkActions: [
                {
                    type: navActionTypes.dashboard,
                },
                {
                    type: navActionTypes.traffic,
                },
            ],
            isExpanded: false,
        },
        {
            type: navSectionTypes.internet,
            linkActions: [
                {
                    type: navActionTypes.wired,
                },
                {
                    type: navActionTypes.wirelessISP,
                },
                {
                    type: navActionTypes.otherConnections,
                },
                {
                    type: navActionTypes.connectionPriorities,
                },
            ],
            isExpanded: false,
        },
        {
            type: navSectionTypes.network,
            linkActions: [
                {
                    type: navActionTypes.deviceList,
                },
                {
                    type: navActionTypes.homeSegment,
                },
                {
                    type: navActionTypes.guestSegment,
                },
                {
                    type: navActionTypes.wifiSegment,
                },
            ],
            isExpanded: false,
        },
        {
            type: navSectionTypes.rules,
            linkActions: [
                {
                    type: navActionTypes.internetSafety,
                },
                {
                    type: navActionTypes.firewall,
                },
                {
                    type: navActionTypes.forwarding,
                },
                {
                    type: navActionTypes.routing,
                },
                {
                    type: navActionTypes.domainName,
                },
                {
                    type: navActionTypes.wirelessACL,
                },
            ],
            isExpanded: false,
        },
        {
            type: navSectionTypes.management,
            linkActions: [
                {
                    type: navActionTypes.systemSettings,
                },
                {
                    type: navActionTypes.applications,
                },
                {
                    type: navActionTypes.usersAndAccess,
                },
                {
                    type: navActionTypes.diagnostics,
                },
            ],
            isExpanded: false,
        },
    ],
};
