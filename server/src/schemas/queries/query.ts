import { GraphQLObjectType } from 'graphql';

import { userQueries } from './user.query';
import { authQueries } from './auth.query';

export const userQuery = new GraphQLObjectType({
    name: 'UserQuery',
    fields: {
        ...userQueries,
    },
});

export const authQuery = new GraphQLObjectType({
    name: 'AuthQuery',
    fields: {
        ...authQueries,
    },
});
