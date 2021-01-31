import { createSelector, createSlice } from '@reduxjs/toolkit';
import { StoreType } from 'store';

import { UsersStateType } from './types';
import reducers from './usersReducers';

const initialState: UsersStateType = {
  users: [],
};

export const usersSlice = createSlice({
  reducers,
  initialState,
  name: 'users',
});

export const { setUsers } = usersSlice.actions;

const selectSelf = (store: StoreType) => store;

export const selectUsers = createSelector(selectSelf, store => store.users);

export type SelectUsers = ReturnType<typeof selectUsers>;

export type SetUsersActionType = typeof setUsers;

export default usersSlice.reducer;
