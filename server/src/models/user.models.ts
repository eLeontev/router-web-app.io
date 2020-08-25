export type Userid = string;

export type User = {
    login: string;
    id: Userid;
    friendsId: Array<Userid>;
};

export type UserIdArguments = {
    id: Userid;
};

export type Users = Array<User>;

export type UserWithFriends = {
    user: User;
    friends: Users;
};
