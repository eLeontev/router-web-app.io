import { cardTypes, connectionTypes } from '../constants/cards.constants';

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
export type Connection = {
    connectionId: string;
    name: string;
    isActive: boolean;
    range: string;
    channel: number;
    connectionInfo: any;
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
