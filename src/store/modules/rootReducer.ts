import {combineReducers} from 'redux';
import ReturnType from 'typescript';
import userReducer from './user/reducer';

export const rootReducer = combineReducers({user: userReducer});

export type RootState = ReturnType<typeof rootReducer>;
