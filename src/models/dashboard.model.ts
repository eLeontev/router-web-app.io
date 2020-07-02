import { CardLoaderService } from '../services/card-loader.service';
import { cardTypes, connectionTypes } from '../constants/cards.constants';
import { connectionActionTypes, modalContentTypes } from '../constants/modal.constants';

export type DashboardProps = {
    cardLoader?: CardLoaderService;
};
export type BaseCard = {
    cardId: string;
    type: cardTypes;
    title: string;
};

export type SystemParam = {
    label: string;
    value: string | number;
};

export type SystemParamProps = {
    systemParam: SystemParam;
};

export type SystemCard = BaseCard & {
    cardContent: {
        systemParams: Array<SystemParam>;
    };
};

export type ApplicationsCard = BaseCard & {
    cardContent: {
        applications: Array<any>;
    };
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

export type WiFiCard = BaseCard & {
    cardContent: {
        connections: Array<Connection>;
        onlineDevices: Array<OnlineDevice>;
    };
};

export type Card = SystemCard | ApplicationsCard | WiFiCard;

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
    [cardType in cardTypes]: (card: CardProps) => any;
};
