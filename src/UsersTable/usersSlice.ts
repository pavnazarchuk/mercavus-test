import { createSelector, createSlice } from '@reduxjs/toolkit';
import { StoreType } from 'store';

import { Hobby, UserData, UsersStateType } from './types';
import reducers from './usersReducers';

const initialState: UsersStateType = {
  usersData: [],
  hobbies: [],
  activeUser: null,
};

export const usersSlice = createSlice({
  reducers,
  initialState,
  name: 'users',
});

export const {
  setUsers,
  addNewUser,
  setActiveUser,
  setHobbies,
  addNewHobby,
  removeHobby,
} = usersSlice.actions;

const selectSelf = (store: StoreType) => store;

export const selectUsers = createSelector(
  selectSelf,
  store => store.users.usersData,
);

export const selectActiveUser = createSelector(
  selectSelf,
  store => store.users.activeUser,
);

export const selectUsersById = createSelector(selectSelf, store =>
  store.users.usersData.reduce((acc: UsersById = {}, cur) => {
    acc[cur.id] = cur;
    return acc;
  }, {}),
);

export const selectHobbiesByUserId = createSelector(selectSelf, store =>
  store.users.hobbies.reduce((acc: HobbiesByUserId = {}, cur) => {
    if (!acc[cur.userId]) {
      acc[cur.userId] = [];
    }

    acc[cur.userId].push(cur);
    return acc;
  }, {}),
);

type UsersById = {
  [key: string]: UserData;
};

type HobbiesByUserId = {
  [key: string]: Hobby[];
};

export type SelectUsers = ReturnType<typeof selectUsers>;

export type SelectActiveUser = ReturnType<typeof selectActiveUser>;

export type SelectUsersById = ReturnType<typeof selectUsersById>;

export type SelectHobbiesByUserId = ReturnType<typeof selectHobbiesByUserId>;

export type SetUsersActionType = typeof setUsers;

export type SetHobbiesActionType = typeof setHobbies;

export type AddNewUserActionType = typeof addNewUser;

export type SetActiveUserActionType = typeof setActiveUser;

export type AddNewHobbyActionType = typeof addNewHobby;

export type RemoveHobbyActionType = typeof removeHobby;

export default usersSlice.reducer;
