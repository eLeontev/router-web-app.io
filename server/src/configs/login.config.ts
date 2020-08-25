import bcrypt from 'bcrypt';
import { saltRounds } from './salt.config';

export const admin = {
    id: 'id',
    login: 'admin',
    password: bcrypt.hashSync('root', saltRounds),
};
