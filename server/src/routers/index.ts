import Router from '@koa/router';
import graphqlHTTP from 'koa-graphql';

import { authSchema, userSchema } from '../schemas/schema';

import { authMiddleware } from '../middlewares/auth.middleware';
import { formatError } from '../helpers/format-error.helper';

export const router = new Router();

router.all(
    '/graphqlAuth',
    graphqlHTTP({
        schema: authSchema,
        graphiql: true,
        formatError,
    })
);

router.all(
    '/graphql',
    authMiddleware,
    graphqlHTTP({
        schema: userSchema,
        graphiql: true,
        formatError,
    })
);
