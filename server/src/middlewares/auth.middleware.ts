import Koa from 'koa';

export const authMiddleware = async (ctx: Koa.ParameterizedContext, next: () => void) => {
    if (ctx.session.isNew) {
        ctx.status = 511;
        ctx.body = { status: 511 };

        return;
    }

    await next();
};
