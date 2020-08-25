import Koa from 'koa';
import { GraphQLFieldResolver } from 'graphql/type/definition';

export type GraphQLKoaController = GraphQLFieldResolver<null, Koa.ParameterizedContext, any>;
