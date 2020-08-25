import Koa from 'koa';
import bcrypt from 'bcrypt';

import { getUserByLogin } from '../helpers/get-user.helper';

import { CommonResponse } from '../models/common.models';
import { LoginArguments } from '../models/auth.models';

export const loginHandler = async (
    ctx: Koa.ParameterizedContext,
    { login, password }: LoginArguments
): Promise<CommonResponse> => {
    const user = getUserByLogin(login);
    let error = '';

    if (user) {
        if (await bcrypt.compare(password, user.password)) {
            ctx.session.userId = user.id;

            return { isSuccess: true };
        }
        error = 'incorrect password';
    }

    throw new Error(error ? error : 'user is not registered');
};

export const logoutHandler = (ctx: Koa.ParameterizedContext) => {
    ctx.session = null;
};
