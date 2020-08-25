import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';

export const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLString },
        login: { type: GraphQLString },
        friendsId: { type: new GraphQLList(GraphQLString) },
    }),
});

export const UsersType = new GraphQLList(UserType);

export const UserWithFriendsType = new GraphQLObjectType({
    name: 'UserWithFriendsType',
    fields: () => ({
        user: { type: UserType },
        friends: { type: UsersType },
    }),
});
