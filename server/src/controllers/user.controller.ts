import { getAllUsers, getUserById, getUsersById } from '../helpers/get-user.helper';

import { User, UserIdArguments, Users, UserWithFriends } from '../models/user.models';
import { GraphQLKoaController } from '../models/controller.model';

export const usersController: GraphQLKoaController = async (): Promise<Users> =>
    await getAllUsers();

export const userController = async ({ id }: UserIdArguments): Promise<User> => {
    const user = await getUserById(id);
    if (user) {
        return user;
    }

    throw new Error('user is not found');
};

export const userWithFriendsController = async (
    userIdArguments: UserIdArguments
): Promise<UserWithFriends> => {
    const user = await userController(userIdArguments);
    const friends = await getUsersById(user.friendsId);

    return {
        user,
        friends,
    };
};
