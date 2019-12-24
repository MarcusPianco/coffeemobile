import {ADD_USER, UPDATE_USER, IUser, UserActiontypes} from './types';

export function addUser(newUser: IUser): UserActiontypes {
    return {
        type: ADD_USER,
        payload: newUser,
    };
}

export function updateUser(userId: number, dataUser: IUser): UserActiontypes {
    return {
        type: UPDATE_USER,
        id: userId,
        payload: dataUser,
    };
}
