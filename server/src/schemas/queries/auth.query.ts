import { GraphQLString } from 'graphql';

import { loginController, logoutController } from '../../controllers/auth.controllers';
import { CommonType } from '../types/common.types';
import { withCtxAndArgs, withCtxOnly } from '../../helpers/koa-controller-wrapper.helper';
import { LoginArguments } from '../../models/auth.models';
import { CommonResponse } from '../../models/common.models';

export const login = {
    type: CommonType,
    args: {
        login: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    resolve: withCtxAndArgs<LoginArguments, Promise<CommonResponse>>(loginController),
};

export const logout = {
    type: CommonType,
    resolve: withCtxOnly(logoutController),
};

export const authQueries = {
    login,
    logout,
};
