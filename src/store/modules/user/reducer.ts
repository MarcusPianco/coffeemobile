import produce from 'immer';
import {UserActiontypes, IUserState} from './types';

const initialState: IUserState = {users: []};

export default function user(
    state = initialState,
    action: UserActiontypes,
): IUserState {
    switch (action.type) {
        case 'ADD_USER':
            return produce<IUserState>(state, draft => {
                draft.users.push({...action.payload});
            });

        case 'UPDATE_USER': {
            return produce<IUserState>(state, draft => {
                const userIndex = draft.users.findIndex(
                    p => p.id === action.payload.id,
                );

                return draft.users.map(item => {
                    if (!(item.id === userIndex)) {
                        return item;
                    }
                    return {...item, ...action.payload};
                });
            });
        }
        default:
            return state;
    }
}
