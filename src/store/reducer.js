import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import user from './user';
import todo from './todo';
import blog from './blog';

export const rootReducer = combineReducers({
  user,
  todo,
  blog,
});

const persistConfig = {
  key: 'root',
  storage, // localStorage에 저장
  whitelist: ['user'], // reducer 중에 user reducer만 저장
  // blacklist: [] -> 그것만 제외합니다
};

export default persistReducer(persistConfig, rootReducer);
