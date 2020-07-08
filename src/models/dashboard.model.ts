import { CardLoaderService } from '../services/card-loader.service';
import {
    cardsLabels,
    cardTypes,
    connectionTypes,
    internetDetailsType,
    trafficType,
} from '../constants/cards.constants';
import { connectionActionTypes, modalContentTypes } from '../constants/modal.constants';

export type DashboardProps = {
    cardLoader?: CardLoaderService;
};
export type BaseCard = {
    cardId: string;
    type: cardTypes;
    title: cardsLabels;
};

export enum paramTypes {
    inactive = 'inactive',
    uptime = 'uptime',
    currentTime = 'currentTime',
    cpuUsage = 'cpuUsage',
    ramUsage = 'ramUsage',
}

export type SystemParamValue = string | number | Date;
export type SystemParam = {
    label: cardsLabels;
    value: SystemParamValue;
    isActive: boolean;
    paramType: paramTypes;
};

export type SystemParams = Array<SystemParam>;
export type UpdateParams = (systemParams: SystemParams) => void;

export type SystemCardContent = {
    startedTime: string;
    systemParams: SystemParams;
};

export type SystemCard = BaseCard & {
    cardContent: SystemCardContent;
};

export type DynamicParamProps = {
    systemParams: SystemParams;
    startedTime: string;
};

export type SplitParams = {
    staticSystemParams: SystemParams;
    dynamicSystemParams: SystemParams;
};

export type ApplicationsCardContent = {
    applications: Array<any>;
};

export type ApplicationsCard = BaseCard & {
    cardContent: ApplicationsCardContent;
};

export type ConnectionAction = {
    isActive: boolean;
    actionType: connectionActionTypes;
};

export type ConnectionInfo = {
    type: modalContentTypes;
    url: string;
    credentials: {
        networkId: string;
        password: string | null;
    };
    actions: {
        main: Array<ConnectionAction>;
        WPS: ConnectionAction;
    };
};

export type Connection = {
    connectionId: string;
    name: string;
    isActive: boolean;
    range: string;
    channel: number;
    connectionInfo: ConnectionInfo;
};
export type ConnectionProps = {
    connection: Connection;
};

export type OnlineDevice = {
    key: string;
    type: connectionTypes;
    countOfConnections: number;
    isHome: boolean;
};
export type OnlineDeviceProps = {
    onlineDevice: OnlineDevice;
};

export type WiFiCardContent = {
    connections: Array<Connection>;
    onlineDevices: Array<OnlineDevice>;
};

export type WiFiCard = BaseCard & {
    cardContent: WiFiCardContent;
};

export type Port = {
    portId: string;
    portType: string;
    portSpeed: number;
    portUnit: string;
    isActive: boolean;
};

export type Ports = Array<Port>;

export type NetworkPortsCardContent = {
    networkPortId: string;
    ports: Ports;
};

export type NetworkPortsCard = BaseCard & {
    cardContent: NetworkPortsCardContent;
};

export type InternetProvider = {
    providerLabel: cardsLabels;
    providerType: string;
};

export type TrafficValue = {
    value: number;
    unit: cardsLabels;
};
export type TrafficValues = Array<TrafficValue>;

export type Traffic = {
    type: trafficType;
    max: TrafficValue;
    current: TrafficValue;
};

export type TrafficInfo = {
    download: Traffic;
    upload: Traffic;
};

export type InternetDetail = {
    label: cardsLabels;
    value: string | number;
    type: internetDetailsType;
};
export type InternetDetails = Array<InternetDetail>;

export type InternetCardContent = {
    main: {
        provider: InternetProvider;
        trafficInfo: TrafficInfo;
        startedTime: string;
    };
    details: InternetDetails;
};

export type InternetCard = BaseCard & {
    cardContent: InternetCardContent;
};

export type Card = SystemCard | ApplicationsCard | WiFiCard | NetworkPortsCard | InternetCard;
export type CardContent =
    | SystemCardContent
    | ApplicationsCardContent
    | WiFiCardContent
    | NetworkPortsCardContent
    | InternetCardContent;

export type CardsResponse = {
    isLoading: boolean;
    leftCards: Array<Card>;
    rightCards: Array<Card>;
};

export type Cards = {
    leftCards: Array<Card>;
    rightCards: Array<Card>;
};

export type CardsProps = Cards;
export type CardProps = {
    card: Card;
};

export type CardsComponents = {
    [cardType in cardTypes]: (card: CardContent) => JSX.Element;
};
