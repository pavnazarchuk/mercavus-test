import { createSelector, createSlice } from '@reduxjs/toolkit';
import { StoreType } from 'store';

import { UsersStateType } from './types';
import reducers from './usersReducers';

const initialState: UsersStateType = {
  usersData: [],
};

export const usersSlice = createSlice({
  reducers,
  initialState,
  name: 'users',
});

export const { setUsers, addNewUser, setActiveUser } = usersSlice.actions;

const selectSelf = (store: StoreType) => store;

export const selectUsers = createSelector(
  selectSelf,
  store => store.users.usersData,
);

export const selectActiveUser = createSelector(
  selectSelf,
  store => store.users.activeUser,
);

export type SelectUsers = ReturnType<typeof selectUsers>;

export type SelectActiveUser = ReturnType<typeof selectActiveUser>;

export type SetUsersActionType = typeof setUsers;

export type AddNewUserActionType = typeof addNewUser;

export type SetActiveUserActionType = typeof setActiveUser;

export default usersSlice.reducer;
