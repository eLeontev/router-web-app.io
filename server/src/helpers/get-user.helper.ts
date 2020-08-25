import { admin } from '../configs/login.config';
import { users } from '../mocks/users.mock';

import { User, Userid } from '../models/user.models';

export const getUserByLogin = (login: string) => (admin.login === login ? admin : null);

export const getAllUsers = () => users;

export const getUserById = (userId: Userid): User | void =>
    users.find(({ id }: User) => id === userId);

export const getUsersById = (userIds: Array<Userid>) =>
    users.filter(({ id }) => userIds.includes(id));
