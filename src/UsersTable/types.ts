import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { SelectUsers, SetUsersActionType } from './usersSlice';

export type PassionType = 'Low' | 'Medium' | 'High' | 'Very-High';

export type Hobby = {
  id: number;
  passion: PassionType;
  hobby: string;
  year: string;
  userId: number;
};

export type UserData = {
  id: number;
  name: string;
  hobbies: Hobby[];
};

// Service types

export type GetUsers = () => Promise<AxiosResponse<UserData[]>>;
export type AddUser = (
  data: Omit<UserData, 'hobbies'>,
) => Promise<AxiosResponse<Omit<UserData, 'hobbies'>>>;

// UserTable Types
export interface IUsersTableProps {
  setUsers: SetUsersActionType;
  users: SelectUsers;
}

export interface IUsersTableState {
  error?: boolean;
  users: UserData[];
}

// Redux Types

export type UsersStateType = {
  usersData: UserData[];
  activeUser?: UserData['id'];
};

type ReducerType<T> = CaseReducer<UsersStateType, PayloadAction<T>>;

export type SetUsers = ReducerType<UserData[]>;

export type AddNewUser = ReducerType<UserData>;

export type SetActiveUser = ReducerType<UserData['id']>;
