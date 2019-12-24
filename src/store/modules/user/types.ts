export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';

export interface IUser {
    name: string;
    email: string;
    password: string;
    id: number;
}

export interface IUserState {
    users: IUser[];
}

interface AddUser {
    type: typeof ADD_USER;
    payload: IUser;
}

interface UpdateUser {
    type: typeof UPDATE_USER;
    payload: IUser;
    id: number;
}

export type UserActiontypes = AddUser | UpdateUser;
