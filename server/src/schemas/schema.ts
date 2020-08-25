import { GraphQLSchema } from 'graphql';

import { authQuery, userQuery } from './queries/query';
import { mutation } from './mutations/mutation';

export const userSchema = new GraphQLSchema({
    query: userQuery,
    // mutation,
});

export const authSchema = new GraphQLSchema({
    query: authQuery,
});
