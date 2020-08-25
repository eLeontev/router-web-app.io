import Koa from 'koa';

import { loginHandler, logoutHandler } from '../services/login.service';
import { getCommonResponse } from '../helpers/get-common-response.helper';

import { LoginArguments } from '../models/auth.models';
import { CommonResponse } from '../models/common.models';

export const loginController = (
    ctx: Koa.ParameterizedContext,
    loginArguments: LoginArguments
): Promise<CommonResponse> => loginHandler(ctx, loginArguments);

export const logoutController = (ctx: Koa.ParameterizedContext): CommonResponse => {
    logoutHandler(ctx);
    return getCommonResponse();
};
