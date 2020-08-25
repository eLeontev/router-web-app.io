import { Users } from '../models/user.models';

export const users: Users = [
    {
        id: '1',
        login: 'Test user',
        friendsId: ['2', '3'],
    },
    {
        id: '2',
        login: 'Dev user',
        friendsId: ['3'],
    },
    {
        id: '3',
        login: 'Guest user',
        friendsId: [],
    },
];
