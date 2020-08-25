import { GraphQLString } from 'graphql';

import {
    userController,
    usersController,
    userWithFriendsController,
} from '../../controllers/user.controller';

import { withArgsOnly } from '../../helpers/koa-controller-wrapper.helper';

import { UsersType, UserType, UserWithFriendsType } from '../types/user.type';
import { User, UserIdArguments, UserWithFriends } from '../../models/user.models';

export const user = {
    type: UserType,
    resolve: withArgsOnly<UserIdArguments, Promise<User>>(userController),
    args: {
        id: { type: GraphQLString },
    },
};

export const users = {
    type: UsersType,
    resolve: usersController,
};

export const userWithFriends = {
    type: UserWithFriendsType,
    resolve: withArgsOnly<UserIdArguments, Promise<UserWithFriends>>(userWithFriendsController),
    args: {
        id: { type: GraphQLString },
    },
};

export const userQueries = {
    user,
    users,
    userWithFriends,
};
