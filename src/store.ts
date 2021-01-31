import { combineReducers, configureStore } from '@reduxjs/toolkit';

import usersSlice from './UsersTable/usersSlice';

const rootReducer = combineReducers({
  users: usersSlice,
});

export default configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type StoreType = ReturnType<typeof rootReducer>;
