import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import session from 'koa-session';
import logger from 'koa-logger';

import { router } from './routers';
import { sessionConfig, sessionSecrets } from './configs/session.config';

export const app = new Koa();

app.keys = sessionSecrets;
app.use(session(sessionConfig, app));

app.use(bodyParser());
app.use(logger());

app.use(router.routes());
app.use(router.allowedMethods());
