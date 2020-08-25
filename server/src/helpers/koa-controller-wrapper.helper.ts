import Koa from 'koa';
import { GraphQLKoaController } from '../models/controller.model';

export const withArgsOnly = <T, R>(controller: (args: T) => R): GraphQLKoaController => (
    source: null,
    loginArguments: T
): R => controller(loginArguments);

export const withCtxOnly = <R>(
    controller: (args: Koa.ParameterizedContext) => R
): GraphQLKoaController => (source: null, loginArguments: null, ctx: Koa.ParameterizedContext): R =>
    controller(ctx);

export const withCtxAndArgs = <T, R>(
    controller: (ctx: Koa.ParameterizedContext, args: T) => R
): GraphQLKoaController => (source: null, args: T, ctx: Koa.ParameterizedContext): R =>
    controller(ctx, args);
