import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from 'graphql';

export const CommonType = new GraphQLObjectType({
    name: 'AuthResponseType',
    fields: {
        isSuccess: { type: GraphQLBoolean },
        error: { type: GraphQLString },
    },
});
